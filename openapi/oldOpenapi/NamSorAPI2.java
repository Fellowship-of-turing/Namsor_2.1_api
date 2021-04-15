/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2;

import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber;
import com.mindflow.py4j.exception.IllegalPinyinException;
import com.namsor.api2.accounting.APICounterManager;
import com.namsor.api2.accounting.APIPricing;
import com.namsor.api2.accounting.NamSorKeyGen;
import com.namsor.api2.accounting.StripeClient;
import com.namsor.api2.classify.AI;
import com.namsor.api2.classify.AIClassifier;
import com.namsor.api2.classify.AINameParserClassifier;
import static com.namsor.api2.classify.AIParsedNamePhoneCodeClassifier.intlPhonePrefix;
import com.namsor.api2.ext.GooglePhoneNumber;
import static com.namsor.api2.ext.GooglePhoneNumber.USE_GOOGLE_PHONE;
import com.namsor.api2.firebase.FirebaseAppServiceAccount;
import com.namsor.api2.firebase.PersistenceException;
import com.namsor.api2.logging.FactInOutLoggerManager;
import com.namsor.api2.mail.SendMailClient;
import com.namsor.api2.model.CountryISO;
import com.namsor.api2.model.Gendered;
import com.namsor.api2.model.LocalizedGeoCountry;
import com.namsor.api2.model.Matched;
import com.namsor.api2.model.in.BatchCorridorIn;
import com.namsor.api2.model.in.BatchFirstLastNameGeoIn;
import com.namsor.api2.model.in.BatchFirstLastNameIn;
import com.namsor.api2.model.in.BatchParsedFullNameGeoIn;
import com.namsor.api2.model.in.BatchParsedFullNameIn;
import com.namsor.api2.model.in.FirstLastNameGeoIn;
import com.namsor.api2.model.in.FirstLastNameIn;
import com.namsor.api2.model.in.NameIn;
import com.namsor.api2.model.in.NameGeoIn;
import com.namsor.api2.model.in.BatchNameGeoIn;
import com.namsor.api2.model.in.BatchNameIn;
import com.namsor.api2.model.in.ParsedFullNameGeoIn;
import com.namsor.api2.model.in.ParsedFullNameIn;
import com.namsor.api2.model.out.APIKeyOut;
import com.namsor.api2.model.out.BatchFirstLastNameGenderedOut;
import com.namsor.api2.model.out.BatchFirstLastNameOriginedOut;
import com.namsor.api2.model.out.FirstLastNameGenderedOut;
import com.namsor.api2.model.out.FirstLastNameOriginedOut;
import com.namsor.api2.model.out.ProperNounCategorizedOut;
import com.namsor.api2.model.out.SystemMetricsOut;
import com.namsor.api2.model.out.BatchProperNounCategorizedOut;
import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.namsor.api2.model.in.BatchFirstLastNameGenderIn;
import com.namsor.api2.model.in.BatchFirstLastNameGeoZippedIn;
import com.namsor.api2.model.in.BatchFirstLastNamePhoneNumberGeoIn;
import com.namsor.api2.model.in.BatchFirstLastNamePhoneNumberIn;
import com.namsor.api2.model.in.BatchMatchPersonalFirstLastNameIn;
import com.namsor.api2.model.in.BatchPersonalNameGeoIn;
import com.namsor.api2.model.in.BatchPersonalNameIn;
import com.namsor.api2.model.in.BillingInfoInOut;
import com.namsor.api2.model.in.CorridorIn;
import com.namsor.api2.model.in.FirstLastNameGenderIn;
import com.namsor.api2.model.in.FirstLastNameGeoGenderIn;
import com.namsor.api2.model.in.FirstLastNameGeoZippedIn;
import com.namsor.api2.model.in.FirstLastNamePhoneNumberCodedIn;
import com.namsor.api2.model.in.FirstLastNamePhoneNumberGeoIn;
import com.namsor.api2.model.in.FirstLastNamePhoneNumberIn;
import com.namsor.api2.model.in.MatchPersonalFirstLastNameIn;
import com.namsor.api2.model.in.PersonalNameGeoIn;
import com.namsor.api2.model.in.PersonalNameIn;
import com.namsor.api2.model.in.PersonalNameParsedGeoIn;
import com.namsor.api2.model.in.PersonalNameParsedIn;
import com.namsor.api2.model.out.APIClassifierOut;
import com.namsor.api2.model.out.APIClassifierTaxonomyOut;
import com.namsor.api2.model.out.APIClassifiersStatusOut;
import com.namsor.api2.model.out.APICounterV2Out;
import com.namsor.api2.model.out.APIPartnerOut;
import com.namsor.api2.model.out.APIPeriodUsageOut;
import com.namsor.api2.model.out.APIPlanOut;
import com.namsor.api2.model.out.APIPlanSubscriptionOut;
import com.namsor.api2.model.out.APIPlansOut;
import com.namsor.api2.model.out.APIServiceOut;
import com.namsor.api2.model.out.APIServicesOut;
import com.namsor.api2.model.out.APIUsageAggregatedOut;
import com.namsor.api2.model.out.BatchCorridorOut;
import com.namsor.api2.model.out.BatchFirstLastNameDiasporaedOut;
import com.namsor.api2.model.out.BatchFirstLastNamePhoneCodedOut;
import com.namsor.api2.model.out.BatchFirstLastNameUSRaceEthnicityOut;
import com.namsor.api2.model.out.BatchNameMatchCandidatesOut;
import com.namsor.api2.model.out.BatchNameMatchedOut;
import com.namsor.api2.model.out.BatchPersonalNameGenderedOut;
import com.namsor.api2.model.out.BatchPersonalNameGeoOut;
import com.namsor.api2.model.out.BatchPersonalNameParsedOut;
import com.namsor.api2.model.out.BillingHistoryOut;
import com.namsor.api2.model.out.CorridorOut;
import com.namsor.api2.model.out.CurrenciesOut;
import com.namsor.api2.model.out.FeedbackLoopOut;
import com.namsor.api2.model.out.FirstLastNameDiasporaedOut;
import com.namsor.api2.model.out.FirstLastNamePhoneCodedOut;
import com.namsor.api2.model.out.FirstLastNameUSRaceEthnicityOut;
import com.namsor.api2.model.out.InvoiceOut;
import com.namsor.api2.model.out.NamSorCounterOut;
import com.namsor.api2.model.out.NameMatchCandidateOut;
import com.namsor.api2.model.out.NameMatchCandidatesOut;
import com.namsor.api2.model.out.NameMatchedOut;
import com.namsor.api2.model.out.PersonalNameGenderedOut;
import com.namsor.api2.model.out.PersonalNameGeoOut;
import com.namsor.api2.model.out.PersonalNameParsedOut;
import com.namsor.api2.model.out.RomanizedNameOut;
import com.namsor.api2.model.out.SoftwareVersionOut;
import com.namsor.api2.model.out.SourceDetailedMetricsOut;
import com.namsor.api2.model.out.StripeCustomerOut;
import com.namsor.api2.model.out.UserInfoOut;
import com.namsor.api2.translate.RomanToJapaneseNameCandidate;
import com.namsor.api2.translate.RomanToJapaneseNameMatcher;
import com.namsor.api2.util.ChinesePinyinUtil;
import com.namsor.api2.util.PhoneUtil;
import com.namsor.api2.util.ScriptUtil;
import com.namsor.api2.util.SimpleRateLimiter;
import com.namsor.opennmtclient.OpenNMTException;
import com.namsor.oss.classify.bayes.ClassifyException;
import com.namsor.stat.cn.RomanToChineseNameCandidate;
import com.namsor.stat.cn.RomanToChineseNameMatcher;
import com.stripe.exception.AuthenticationException;
import com.stripe.exception.InvalidRequestException;
import com.stripe.exception.StripeException;
import com.stripe.model.Invoice;
import io.swagger.v3.oas.annotations.Parameter;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.logging.LogManager;
import javax.ws.rs.FormParam;
import javax.ws.rs.QueryParam;

/**
 * REST Web Service
 *
 * @author elian
 */
@Path("json")
@Produces({"application/json"})
@OpenAPIDefinition(
        info = @Info(
                title = "NamSor API v2",
                version = "2.0.14",
                description = "NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! ",
                license = @License(name = "NamSorAPI_Lic_v0.0.7", url = "https://v2.namsor.com/NamSorAPIv2/assets/pdf/201803_NamSor_API_Terms_v007.pdf"),
                contact = @Contact(url = "http://www.namsor.com/", name = "Namsor SAS", email = "contact@namsor.com")
        ),
        tags = {
            @Tag(name = "personal", description = "Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy"),
            @Tag(name = "social", description = "Social media and pseudonyms"),
            @Tag(name = "chinese", description = "CHINESE special features"),
            @Tag(name = "japanese", description = "JAPANESE special features"),
            @Tag(name = "admin", description = "Administrative, system management."),},
        externalDocs = @ExternalDocumentation(description = "NamSor API client SDKs v2 for Java, Python", url = "https://github.com/namsor"),
        security = {
            @SecurityRequirement(name = "api_key", scopes = {}),},
        servers = {
            @Server(
                    description = "namsor_v2",
                    url = "https://v2.namsor.com/NamSorAPIv2",
                    variables = {})
        },
        extensions = {}
)
@SecurityScheme(name = "api_key",
        type = SecuritySchemeType.APIKEY,
        in = SecuritySchemeIn.HEADER,
        paramName = "X-API-KEY",
        description = "api_key required"
)

public class NamSorAPI2 {

    public static final boolean IS_TEST = false;
    public static final boolean IS_STRIPE_TEST = false;

    public static final String API_HOME = "https://v2.namsor.com/NamSorAPIv2/";
    public static final String API_HOME_PAYMENT = "https://v2.namsor.com/NamSorAPIv2/payments.html";

    /**
     * Success : renvoie direct vers API DOC
     */
    public static final String STRIPE_SUCCESS = API_HOME + "apidoc.html";
    public static final String STRIPE_ERROR = API_HOME + "stripe-failed.html";

    public static final String NAMSOR_APIKEY = "X-API-KEY"; // was : X-Channel-User
    public static final String NAMSOR_ANONYMIZER = "X-Anonymizer"; // prevents learning and logging
    public static final int[] SOFTWARE_VERSION = {2, 0, 14};
    public static final String SOFTWARE_BUILD = "B01";
    public static final String SOFTWARE_NAME_VERSION = "NamSorAPIv" + SOFTWARE_VERSION[0] + "." + SOFTWARE_VERSION[1] + "." + SOFTWARE_VERSION[2] + SOFTWARE_BUILD;
    public static final String DEFAULT_ENCODING_UTF8 = "UTF-8";
    private static final String APPLICATION_JSON_UTF8 = "application/json;charset=" + DEFAULT_ENCODING_UTF8;

    // OPTIONS
    public static final String NAMSOR_OPTION_JPNAME_ORDER = "X-OPTION-JPNAME-ORDER";
    public static final String NAMSOR_OPTION_USRACEETHNICITY_TAXO = "X-OPTION-USRACEETHNICITY-TAXONOMY";
    public static final String NAMSOR_OPTION_USRACEETHNICITY_TAXO_4CLASSES = "USRACEETHNICITY-4CLASSES";
    public static final String NAMSOR_OPTION_USRACEETHNICITY_TAXO_6CLASSES = "USRACEETHNICITY-6CLASSES";
    /**
     * By default, use 4 classes
     */
    private static final boolean DEFAULT_USRACEETHNICITY_TAXO_USE4OR6CLASSES = true;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of OnomasticsResource
     */
    public NamSorAPI2() {
    }

    @Path("stripeConnect")
    @GET
    @Produces(MediaType.TEXT_HTML)
    @Tag(name = "admin")
    @Operation(summary = "Connects a Stripe Account.", hidden = false)
    @ApiResponse(responseCode = "401", description = "Missing or incorrect email or payment token")
    public Response stripeConnect(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @QueryParam("scope") String scope, final @QueryParam("code") String code, final @QueryParam("error") String error, final @QueryParam("error_description") String error_description) throws URISyntaxException {
        try {
            Logger.getLogger(getClass().getName()).info("Stripping partner account token " + code);
            if (error != null && !error.isEmpty()) {
                Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, "FAILED Stripping partner account token " + code + " error =" + error + " " + error_description);
                SendMailClient.getInstance().sendErrorMail("FAILED Stripping partner account token " + code + " error =" + error + " " + error_description, true);
            } else if (code != null && !code.isEmpty()) {
                Logger.getLogger(getClass().getName()).info("Step 4: Fetch the user's credentials from Stripe");
                String connectedStripeUserId = StripeClient.getInstance().connectStripe(code);
                APIPartnerOut partner = FirebaseAppServiceAccount.getInstance().createAPIPartner(connectedStripeUserId);
                Logger.getLogger(getClass().getName()).info("DONE Step 4: Fetch the user's credentials from Stripe - created partner");
            }
            Logger.getLogger(getClass().getName()).info("Stripping partner account token " + code);
            return Response.temporaryRedirect(new URI(STRIPE_SUCCESS)).build();
        } catch (IOException | PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            SendMailClient.getInstance().sendErrorMail("Failed to stripe partner account err=" + ex.getClass().getName() + " - " + ex.getMessage(), true);
            return Response.temporaryRedirect(new URI(STRIPE_ERROR)).build();
        }
    }

    @Path("charge")
    @POST
    @Produces(MediaType.TEXT_HTML)
    @Tag(name = "admin")
    @Operation(summary = "Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A stripe customerID",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect email or payment token")
    public Response charge(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @FormParam("stripeToken") String stripeToken, final @FormParam("stripeEmail") String stripeEmail) throws URISyntaxException {
        Logger.getLogger(getClass().getName()).info("Stripping session token " + stripeToken + " email " + stripeEmail);
        String userEmail = null;
        try {
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecordByEmail(stripeEmail);
            if (userRecord == null) {
                Logger.getLogger(getClass().getName()).warning("UNAUTHORIZED Email not found while Stripping stripeToken=" + stripeToken + " stripeEmail=" + stripeEmail);
                throw new RESTException("UserRecord is null for stripeEmail " + stripeEmail, Response.Status.UNAUTHORIZED);
            } else {
                userEmail = userRecord.getEmail();
                Logger.getLogger(getClass().getName()).info("Stripping session stripeToken=" + stripeToken + " uid=" + userRecord.getUid() + " userEmail=" + userEmail);
                if (userRecord.isEmailVerified()) {
                    // OK 
                } else {
                    // Resend verif token
                    String verifToken = FirebaseAppServiceAccount.getInstance().findOrCreateEmailVerifyToken(userRecord.getUid());
                    SendMailClient.getInstance().sendMail(userRecord.getEmail(), "Thanks for adding a payment method", "Hi!\nThanks for adding a payment method.\nPlease, click here to verify your email : \n" + API_HOME + "api2/json/verifyEmail/" + verifToken, true);
                }
                StripeCustomerOut customerOut = StripeClient.getInstance().createOrUpdateStripeCustomer(userEmail, stripeToken);
                Logger.getLogger(getClass().getName()).info("Stripping OK session stripeToken=" + stripeToken + " uid=" + userRecord.getUid() + " userEmail=" + userEmail + " stripeCustomerId=" + customerOut.getStripeCustomerId());
                FirebaseAppServiceAccount.getInstance().updateStripeCustomerId(userRecord.getUid(), customerOut);
                return Response.temporaryRedirect(new URI(STRIPE_SUCCESS)).build();
            }
        } catch (StripeException | PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            SendMailClient.getInstance().sendErrorMail("Failed to stripe " + userEmail + " err=" + ex.getClass().getName() + " - " + ex.getMessage(), true);
            return Response.temporaryRedirect(new URI(STRIPE_ERROR)).build();
        }
    }

    @Path("userInfo/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Get the user profile associated with the current google auth session token.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An session token",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public UserInfoOut userInfo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            UserInfoOut result = new UserInfoOut();
            result.setDisabled(userRecord.isDisabled());
            result.setDisplayName(userRecord.getDisplayName());
            result.setEmail(userRecord.getEmail());
            result.setEmailVerified(userRecord.isEmailVerified());
            result.setStripePerishableKey(StripeClient.getInstance().getStripePerishableKey());
            return result;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        }
    }

    @Path("paymentInfo/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Get the Stripe payment information associated with the current google auth session token.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An session token",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public StripeCustomerOut paymentInfo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            StripeCustomerOut paymentInfo = FirebaseAppServiceAccount.getInstance().readUserPaymentInfo(userRecord);
            return paymentInfo;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("updatePaymentDefault/{defautSourceId}/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Update the default Stripe card associated with the current google auth session token.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An session token",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public StripeCustomerOut updatePaymentDefault(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("defautSourceId") String defautSourceId, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            StripeCustomerOut paymentInfo = FirebaseAppServiceAccount.getInstance().updateUserPaymentInfo(userRecord, defautSourceId);
            return paymentInfo;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("softwareVersion")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Get the current software version",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The current software version",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareVersionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public SoftwareVersionOut softwareVersion(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        return softwareVersion();
    }

    private SoftwareVersionOut softwareVersion() {
        SoftwareVersionOut res = new SoftwareVersionOut();
        res.setSoftwareNameAndVersion(SOFTWARE_NAME_VERSION);
        res.setSoftwareVersion(SOFTWARE_VERSION);
        return res;
    }

    @Path("namsorCounter")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Get the overall API counter",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The overall API counter",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareVersionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public NamSorCounterOut namsorCounter(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        try {
            NamSorCounterOut res = new NamSorCounterOut();
            res.setCounter(FirebaseAppServiceAccount.getInstance().readCounter());
            return res;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("billingCurrencies")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "List possible currency options for billing (USD, EUR, GBP, ...)",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The supported billing currencies.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = CurrenciesOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public CurrenciesOut billingCurrencies(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        CurrenciesOut res = new CurrenciesOut();
        res.setCurrenciesIso3(APIPricing.CURRENCIES_ISO3);
        return res;
    }

    @Path("billingInfo/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Read the billing information (company name, address, phone, vat ID)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The current billing info",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BillingInfoInOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public BillingInfoInOut billingInfo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            // for stripe customers : should we check consistency? 
            // for any customer, incl corporates
            BillingInfoInOut billingInfo = FirebaseAppServiceAccount.getInstance().readUserBillingInfo(userRecord);
            return billingInfo;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("updateBillingInfo/{token}")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Sets or update the billing information (company name, address, phone, vat ID)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The updated billing info",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BillingInfoInOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public BillingInfoInOut updateBillingInfo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token, final BillingInfoInOut body) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            /*
            String api_key = FirebaseAppServiceAccount.getInstance().readUserAPIKey(uid);
            if (api_key == null) {
                throw new RESTException("api_key is null ", Response.Status.UNAUTHORIZED);
            }*/
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }

            // try and default the preferred currenty if not set
            if (body.getPreferredCurrency() == null || body.getPreferredCurrency().isEmpty()) {
                Logger.getLogger(getClass().getName()).info("PreferredCurrency is null or empty .getInstance().findStripeCustomerIDByEmail() is null for " + userRecord.getEmail());
                body.setPreferredCurrency(APIPricing.getInstance().defaultCurrencyByCountry(body.getAddressCountry()).getCurrencyIso3());
                Logger.getLogger(getClass().getName()).info("Defaulted PreferredCurrency to " + body.getPreferredCurrency() + "for " + userRecord.getEmail());
            }

            // for any customer, incl corporates
            FirebaseAppServiceAccount.getInstance().saveUserBillingInfo(userRecord, body);

            // for stripe customers
            String stripeCustomerId = StripeClient.getInstance().findStripeCustomerIDByEmail(userRecord.getEmail());
            if (stripeCustomerId == null) {
                Logger.getLogger(getClass().getName()).warning("StripeClient.getInstance().findStripeCustomerIDByEmail() is null for " + userRecord.getEmail());
            } else {
                // the user is striped : update the stripe billing details
                StripeClient.getInstance().updateNameAndShippingAddress(stripeCustomerId,
                        body.getCustomerName(), body.getCustomerPhone(), body.getAddressLine1(), body.getAddressLine2(), body.getAddressCity(), body.getAddressPostalCode(), body.getAddressState(), body.getAddressCountry());
            }
            return body;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("billingHistory/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Read the history billing information (invoices paid via Stripe or manually).", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "The billing history",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BillingHistoryOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public BillingHistoryOut billingHistory(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            // for stripe customers : should we check consistency? 
            // for any customer, incl corporates
            UserInfoOut userInfo = FirebaseAppServiceAccount.getInstance().readUserInfo(uid);
            if (userRecord == null) {
                throw new RESTException("UserInfoOut userInfo for " + uid + " is null", Response.Status.UNAUTHORIZED);
            }
            BillingHistoryOut billingHistory = new BillingHistoryOut();
            Map<String, APIPricing.APIProductPlanCurrency> allPlansByNick = APIPricing.getInstance().allProductPlanCurrencies();
            if (userInfo.getStripeCustomerId() != null) {
                int maxInvoices = 50;
                StripeClient.StripeInvoiceData stripeInvoices = StripeClient.getInstance().listInvoices(userInfo.getStripeCustomerId(), maxInvoices);
                {
                    List<InvoiceOut> stripeInvoicesOut = new ArrayList();
                    for (Invoice stripeInvoice : stripeInvoices.getInvoices()) {
                        InvoiceOut invoiceOut = InvoiceOut.adapt(stripeInvoice, stripeInvoices, allPlansByNick);
                        invoiceOut.setUserId(uid);
                        stripeInvoicesOut.add(invoiceOut);
                    }
                    billingHistory.setStripeInvoices(stripeInvoicesOut);
                }
                // for test only
                {
                    List<InvoiceOut> stripeInvoicesOut = FirebaseAppServiceAccount.getInstance().readUserInvoice(uid);
                    billingHistory.setCorporateInvoices(stripeInvoicesOut);
                }
            }
            return billingHistory;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (AuthenticationException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (InvalidRequestException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("StripeException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("procureKey/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API Key",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIKeyOut procureKey(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            String remoteIPAddr = request.getRemoteAddr();
            String api_key = FirebaseAppServiceAccount.getInstance().readUserAPIKey(uid);
            if (api_key == null) {
                UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
                if (userRecord == null) {
                    throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
                }
                if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                    throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
                }
                api_key = NamSorKeyGen.keyGenV2(userRecord.getEmail());
                String verifToken = null;
                if (userRecord.isEmailVerified()) {
                    SendMailClient.getInstance().sendMail(userRecord.getEmail(), "Your NamSor API Key", "Hi!\nYour API Key is : " + api_key + "\nIt should be passed as a " + NAMSOR_APIKEY + " header.\nUse it at " + API_HOME, true);
                } else {
                    verifToken = "" + System.currentTimeMillis();
                    SendMailClient.getInstance().sendMail(userRecord.getEmail(), "Your NamSor API Key", "Hi!\nYour API Key is : " + api_key + "\nIt should be passed as a " + NAMSOR_APIKEY + " header.\nFinally, click here to verify your email : \n" + API_HOME + "api2/json/verifyEmail/" + verifToken, true);
                }
                APIKeyOut apiKeyObj = new APIKeyOut();
                apiKeyObj.setApiKey(api_key);
                apiKeyObj.setUserId(uid);
                FirebaseAppServiceAccount.getInstance().saveUserAPIKey(apiKeyObj, userRecord, verifToken, remoteIPAddr);
                /**
                 * Shall we try and migrate existing accounts? NO. Not for now.
                 * StripeCustomerOut customerOut =
                 * StripeClient.getInstance().findStripeCustomerOutByEmail(userRecord.getEmail());
                 * if( stripeCustomer != null ) {
                 * Logger.getLogger(getClass().getName()).info("Stripping uid="
                 * + userRecord.getUid() + " userEmail=" + userRecord.getEmail()
                 * + " stripeCustomerId=" + customerOut.getStripeCustomerId());
                 * FirebaseAppServiceAccount.getInstance().updateStripeCustomerId(userRecord.getUid(),
                 * customerOut); }
                 */
            }

            APIKeyOut result = FirebaseAppServiceAccount.getInstance().readAPIKey(api_key);
            return result;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("availablePlans")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "List all available plans in the default currency (usd).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Available plans",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlansOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlansOut availablePlans(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        APIPricing.BillingCurrency currency = APIPricing.CURRENCY_USD;
        APIPricing.APIPlan[] plans = APIPricing.getInstance().getPlans();
        APIPlanOut[] plansOut = new APIPlanOut[plans.length];
        for (int i = 0; i < plansOut.length; i++) {
            APIPricing.APIPlan plan = plans[i];
            APIPlanOut planOut = new APIPlanOut();
            planOut.setPlanName(plan.getPlanName());
            planOut.setPlanQuota(plan.getPlanQuota());
            planOut.setPrice(plan.price(currency));
            planOut.setPriceOverage(plan.priceOverage(currency));
            plansOut[i] = planOut;
        }
        APIPlansOut res = new APIPlansOut();
        res.setPlans(plansOut);
        res.setCurrencyIso3(currency.getCurrencyIso3());
        res.setCurrencySymbol(currency.getSymbol());
        res.setUsageRatioForDupplicates(APIPricing.DUPPLICATES_USAGE_MOD);
        return res;
    }

    @Path("apiStatus")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Prints the current status of the classifiers.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Available classifiers and status",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlansOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIClassifiersStatusOut apiStatus(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        APIClassifierOut[] classifiersOut = new APIClassifierOut[AI.getInstance().getClassifiers().length];
        for (int i = 0; i < classifiersOut.length; i++) {
            APIClassifierOut classifierOut = new APIClassifierOut();
            AIClassifier classifier = AI.getInstance().getClassifiers()[i];
            classifierOut.setClassifierName(classifier.getClassifierName());
            classifierOut.setServing(classifier.isServing());
            classifierOut.setLearning(classifier.isLearning());
            classifierOut.setShuttingDown(classifier.isShuttingDown());
            classifierOut.setProbabilityCalibrated(classifier.getCalibration() != null);
            classifiersOut[i] = classifierOut;
        }
        APIClassifiersStatusOut res = new APIClassifiersStatusOut();
        res.setSoftwareVersion(softwareVersion());
        res.setClassifiers(classifiersOut);
        return res;
    }

    @Path("apiServices")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "List of API services and usage cost in Units (default is 1=ONE Unit).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Available services",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlansOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIServicesOut availableServices(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        List<APIServiceOut> services = new ArrayList();
        for (String classifierName : AI.getInstance().getClassifierNames()) {
            APIPricing.APIService service = APIPricing.getInstance().getServices().get(classifierName);
            if (service == null) {
                Logger.getLogger(getClass().getName()).warning("Classifier " + classifierName + " should be registered as an API Service.");
                APIServiceOut serviceOut = new APIServiceOut();
                serviceOut.setCostInUnits(1);
                serviceOut.setServiceGroup(AIClassifier.class.getSimpleName());
                serviceOut.setServiceName(classifierName);
                services.add(serviceOut);
            }
        }
        for (APIPricing.APIService service : APIPricing.getInstance().getServices().values()) {
            APIServiceOut serviceOut = new APIServiceOut();
            serviceOut.setCostInUnits(service.getCostInUnits());
            serviceOut.setServiceGroup(service.getServiceGroup());
            serviceOut.setServiceName(service.getServiceName());
            services.add(serviceOut);
        }
        Collections.sort(services, Comparator.comparing(a -> a.getServiceGroup()));
        APIServiceOut[] arr = services.toArray(new APIServiceOut[services.size()]);
        APIServicesOut res = new APIServicesOut();
        res.setApiServices(arr);
        return res;
    }

    @Path("availablePlans/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "List all available plans in the user's preferred currency.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Available plans",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlansOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlansOut availablePlans(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            APIPricing.BillingCurrency currency = APIPricing.CURRENCY_USD;
            BillingInfoInOut billingInfo = FirebaseAppServiceAccount.getInstance().readUserBillingInfo(userRecord);
            if (billingInfo != null && billingInfo.getPreferredCurrency() != null && !billingInfo.getPreferredCurrency().isEmpty()) {
                // check for the customer preferred currency
                currency = APIPricing.getInstance().getBillingCurrency(billingInfo.getPreferredCurrency());
            }
            APIPricing.APIPlan[] plans = APIPricing.getInstance().getPlans();
            APIPlanOut[] plansOut = new APIPlanOut[plans.length];
            for (int i = 0; i < plansOut.length; i++) {
                APIPricing.APIPlan plan = plans[i];
                APIPlanOut planOut = new APIPlanOut();
                planOut.setPlanName(plan.getPlanName());
                planOut.setPlanQuota(plan.getPlanQuota());
                planOut.setPrice(plan.price(currency));
                planOut.setPriceOverage(plan.priceOverage(currency));
                plansOut[i] = planOut;
            }
            APIPlansOut res = new APIPlansOut();
            res.setPlans(plansOut);
            res.setCurrencyIso3(currency.getCurrencyIso3());
            res.setCurrencySymbol(currency.getSymbol());
            res.setUsageRatioForDupplicates(APIPricing.DUPPLICATES_USAGE_MOD);
            return res;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("taxonomyClasses/{classifierName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Print the taxonomy classes valid for the given classifier.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Available plans",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlansOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIClassifierTaxonomyOut taxonomyClasses(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("classifierName") String classifierName) {
        for (AIClassifier classifier : AI.getInstance().getClassifiers()) {
            if (classifier.getClassifierName().equals(classifierName)) {
                return processTaxonomyClasses(classifier);
            }
        }
        return null;
    }

    private APIClassifierTaxonomyOut processTaxonomyClasses(AIClassifier classifier) {
        APIClassifierTaxonomyOut res = new APIClassifierTaxonomyOut();
        res.setClassifierName(classifier.getClassifierName());
        res.setTaxonomyClasses(classifier.getLearnableCategories());
        return res;
    }

    @Path("subscribePlan/{planName}/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Subscribe to a give API plan, using the user's preferred or default currency.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API subscription",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlanSubscriptionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlanSubscriptionOut subscribePlan(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("planName") String planName, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            APIPlanSubscriptionOut subscription = FirebaseAppServiceAccount.getInstance().subscribePlan(uid, planName, false);
            return subscription;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("subscribePlanOnBehalf/{planName}/{apiKey}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Subscribe to a give API plan, using the user's preferred or default currency (admin only).", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API subscription",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlanSubscriptionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlanSubscriptionOut subscribePlanOnBehalf(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("planName") String planName, final @PathParam("apiKey") String apiKey) {
        try {
            // check API Key
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            String uid = FirebaseAppServiceAccount.getInstance().findUserIdByAPIKey(apiKey);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            APIPlanSubscriptionOut subscription = FirebaseAppServiceAccount.getInstance().subscribePlan(uid, planName, false);
            return subscription;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("removeUserAccount/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Remove the user account.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API subscription",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlanSubscriptionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlanSubscriptionOut removeUserAccount(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            // step 1 - invoice current overages and cancel any ongoing subscription. 
            APIPlanSubscriptionOut subscription = FirebaseAppServiceAccount.getInstance().subscribePlan(uid, APIPricing.getInstance().getPlans()[0].getPlanName(), false);
            // step 2 - send a verification token deletion 
            String verifToken = FirebaseAppServiceAccount.getInstance().findOrCreateEmailVerifyToken(userRecord.getUid());
            SendMailClient.getInstance().sendMail(userRecord.getEmail(), "Please confirm account removal", "Hi!\nWe're sad to see you go. You can keep your free BASIC subscription.\nOr, to delete your account, click here to verify : \n" + API_HOME + "api2/json/verifyRemoveEmail/" + verifToken, true);
            return subscription;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }

    }

    @Path("removeUserAccountOnBehalf/{apiKey}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Remove (on behalf) a user account.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API subscription",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPlanSubscriptionOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPlanSubscriptionOut removeUserAccountOnBehalf(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("apiKey") String apiKey) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            String uid = FirebaseAppServiceAccount.getInstance().findUserIdByAPIKey(apiKey);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            // step 1 - invoice current overages and cancel any ongoing subscription. 
            APIPlanSubscriptionOut subscription = FirebaseAppServiceAccount.getInstance().subscribePlan(uid, APIPricing.getInstance().getPlans()[0].getPlanName(), false);
            // step 2 - send a verification token deletion 
            String verifToken = FirebaseAppServiceAccount.getInstance().findOrCreateEmailVerifyToken(userRecord.getUid());
            SendMailClient.getInstance().sendMail(userRecord.getEmail(), "Please confirm account removal", "Hi!\nWe're sad to see you go. You can keep your free BASIC subscription.\nOr, to delete your account, click here to verify : \n" + API_HOME + "api2/json/verifyRemoveEmail/" + verifToken, true);
            return subscription;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }

    }

    @Path("updateLimit/{usageLimit}/{hardOrSoft}/{token}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API subscription",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPeriodUsageOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public APIPeriodUsageOut updateLimit(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("usageLimit") int usageLimit, final @PathParam("hardOrSoft") boolean hardOrSoft, final @PathParam("token") String token) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyIDToken(token);
            if (uid == null) {
                throw new RESTException("Firebase UID is null ", Response.Status.UNAUTHORIZED);
            }
            UserRecord userRecord = FirebaseAppServiceAccount.getInstance().getUserRecord(uid);
            if (userRecord == null) {
                throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
            }
            if (userRecord.getEmail() == null || userRecord.getEmail().isEmpty()) {
                throw new RESTException("FirebaseAuthException UserRecord.email is null", Response.Status.UNAUTHORIZED);
            }
            String apiKey = FirebaseAppServiceAccount.getInstance().readUserAPIKey(uid);
            FirebaseAppServiceAccount.getInstance().updateCurrentBillingPeriodUsageLimits(apiKey, usageLimit, hardOrSoft);
            APIKeyOut api_key = FirebaseAppServiceAccount.getInstance().readAPIKey(apiKey);
            if (api_key == null || api_key.getApiKey() == null) {
                throw new RESTException("Unknown " + NAMSOR_APIKEY + " " + api_key, Response.Status.UNAUTHORIZED);
            }
            APIPeriodUsageOut metrics = FirebaseAppServiceAccount.getInstance().readCurrentUsage(api_key);
            return metrics;
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("verifyEmail/{emailToken}")
    @GET
    @Produces(MediaType.TEXT_HTML)
    @Tag(name = "admin")
    @Operation(summary = "Verifies an email, based on token sent to that email", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API Key",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public Response verifyEmail(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("emailToken") String emailToken) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyEmailToken(emailToken);
            if (uid == null) {
                throw new RESTException("Email Token not found", Response.Status.UNAUTHORIZED);
            }
            String api_key = FirebaseAppServiceAccount.getInstance().readUserAPIKey(uid);
            APIKeyOut result = new APIKeyOut();
            result.setApiKey(api_key);
            return Response.temporaryRedirect(new URI(API_HOME)).build();
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (URISyntaxException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            return Response.status(500, "failed to redirect to " + API_HOME).build();
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("verifyRemoveEmail/{emailToken}")
    @GET
    @Produces(MediaType.TEXT_HTML)
    @Tag(name = "admin")
    @Operation(summary = "Verifies an email, based on token sent to that email", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "An API Key",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIKeyOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect token")
    public Response verifyRemoveEmail(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("emailToken") String emailToken) {
        try {
            // check API Key
            String uid = FirebaseAppServiceAccount.getInstance().verifyEmailToken(emailToken);
            if (uid == null) {
                throw new RESTException("Email Token not found", Response.Status.UNAUTHORIZED);
            }
            boolean success = FirebaseAppServiceAccount.getInstance().removeUser(uid);
            if (!success) {
                throw new RESTException("Failed to close Stripe account.", Response.Status.PAYMENT_REQUIRED);
            }
            return Response.temporaryRedirect(new URI(API_HOME)).build();
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(getClass().getName()).log(Level.WARNING, "FirebaseAuthException " + ex.getMessage(), ex);
            throw new RESTException("FirebaseAuthException " + ex.getMessage(), Response.Status.UNAUTHORIZED);
        } catch (URISyntaxException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            return Response.status(500, "failed to redirect to " + API_HOME).build();
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (StripeException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }

    }

    @Path("stats")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Print basic system statistics.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Current system status.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = SystemMetricsOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public SystemMetricsOut stats(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        // check API Key
        APIKeyOut api_key = checkAPIKey(request, true);
        SystemMetricsOut metrics = new SystemMetricsOut();
        metrics.setClassifierMetrics(AI.getInstance().getClassifierMetrics());
        metrics.setCacheMetrics(AI.getInstance().getCacheMetrics());
        metrics.setSourceMetrics(AI.getInstance().getSourceMetrics(api_key));
        metrics.setFreeMem(Runtime.getRuntime().freeMemory());
        metrics.setTotalMem(Runtime.getRuntime().totalMemory());
        metrics.setMaxMem(Runtime.getRuntime().maxMemory());
        return metrics;
    }

    @Path("apiUsage")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Print current API usage.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Print current API usage.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPeriodUsageOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public APIPeriodUsageOut apiUsage(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false);
            APIPeriodUsageOut metrics = FirebaseAppServiceAccount.getInstance().readCurrentUsage(api_key);
            return metrics;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("apiUsageHistory")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Print historical API usage.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Print historical API usage.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPeriodUsageOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public List<APICounterV2Out> apiUsageHistory(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false);
            List<APICounterV2Out> histo = FirebaseAppServiceAccount.getInstance().readHistoUsage(api_key);
            return histo;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("apiUsageHistoryAggregate")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Print historical API usage (in an aggregated view, by service, by day/hour/min).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Print historical API usage.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = APIPeriodUsageOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public APIUsageAggregatedOut apiUsageHistoryAggregate(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false);
            APIUsageAggregatedOut histo = FirebaseAppServiceAccount.getInstance().readHistoUsageAggregate(api_key);
            return histo;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("sourceStats/{source}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Print basic source statistics.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Current system status.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = SystemMetricsOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public List<SourceDetailedMetricsOut> sourceStats(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("source") String source) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = findAPIKey(source.trim());//FirebaseAppServiceAccount.getInstance().readAPIKey(source.trim());
            List<SourceDetailedMetricsOut> metrics = AI.getInstance().getSourceMetricsDetailed(sourceAPIKeyOut);
            return metrics;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("addCredits/{apiKey}/{usageCredits}/{userMessage}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Add usage credits to an API Key.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Estimate new after applying credits.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = SystemMetricsOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public APIPeriodUsageOut addCredits(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("apiKey") String apiKey, final @PathParam("usageCredits") long usageCredits, final @PathParam("userMessage") String userMessage) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = findAPIKey(apiKey.trim());
            APIPeriodUsageOut metrics = FirebaseAppServiceAccount.getInstance().readCurrentUsage(sourceAPIKeyOut);
            long currentUsage = metrics.getBillingPeriod().getUsage();
            long newUsageEst = currentUsage - usageCredits;
            metrics.getBillingPeriod().setUsage(newUsageEst);
            metrics.computeOverages();
            FirebaseAppServiceAccount.getInstance().addUsageCredits(sourceAPIKeyOut.getApiKey(), userMessage, usageCredits);
            return metrics;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        } catch (FirebaseAuthException ex) {
            Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("FirebaseAuthException UserRecord is null", Response.Status.UNAUTHORIZED);
        }
    }

    @Path("flush")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Flush counters.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Flush API Key caches."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void flush(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, true);
        AI.getInstance().flushCounters();
    }

    @Path("shutdown")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Stop learning and shutdown system.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Shutdown AI."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void shutdown(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, true);
        AI.getInstance().shutdown();
    }

    @Path("invalidateCache")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Invalidate system caches.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Clear caches."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void invalidateCache(final @Context HttpServletRequest request, final @Context HttpServletResponse response) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        FirebaseAppServiceAccount.getInstance().invalidateCache();
    }

    @Path("debugLevel/{logger}/{level}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Update debug level for a classifier",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = ""
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void debugLevel(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("logger") String logger, final @PathParam("level") String level) {
        // check API Key            
        APIKeyOut api_key = checkAPIKey(request, true);
        Enumeration<String> logNames = LogManager.getLogManager().getLoggerNames();
        while (logNames.hasMoreElements()) {
            String logName = logNames.nextElement();
            Logger.getLogger(getClass().getName()).info("Logger " + logName + " Log.leve=" + Logger.getLogger(logName).getLevel());
        }
        Logger log = Logger.getLogger(logger);
        if (log == null) {
            Logger.getLogger(getClass().getName()).warning("Logger " + logger + " not found, ignoring.");
        } else {
            Level logLevel = Level.parse(level);
            if (logLevel == null) {
                Logger.getLogger(getClass().getName()).warning("log.Level " + level + " not found, ignoring.");
            } else {
                log.setLevel(logLevel);
            }
        }
    }

    @Path("learnable/{source}/{learnable}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Activate/deactivate learning from a source.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Vetting of a source."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void learnable(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("source") String source, final @PathParam("learnable") boolean learnable) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = FirebaseAppServiceAccount.getInstance().readAPIKey(source.trim());
            if (sourceAPIKeyOut == null || sourceAPIKeyOut.getApiKey() == null) {
                throw new RESTException("Unknown source " + source, Response.Status.BAD_REQUEST);
            }
            FirebaseAppServiceAccount.getInstance().updateLearnable(sourceAPIKeyOut, learnable);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("anonymize/{source}/{anonymized}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Activate/deactivate anonymization for a source.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Anonymization of a source."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void anonymize(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("source") String source, final @PathParam("anonymized") boolean anonymized) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = FirebaseAppServiceAccount.getInstance().readAPIKey(source.trim());
            if (sourceAPIKeyOut == null || sourceAPIKeyOut.getApiKey() == null) {
                throw new RESTException("Unknown source " + source, Response.Status.BAD_REQUEST);
            }
            FirebaseAppServiceAccount.getInstance().updateAnonymized(sourceAPIKeyOut, anonymized);
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("vetting/{source}/{vetted}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Vetting of a source.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Vetting of a source."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void vet(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("source") String source, final @PathParam("vetted") boolean vetted) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = FirebaseAppServiceAccount.getInstance().readAPIKey(source.trim());
            if (sourceAPIKeyOut == null || sourceAPIKeyOut.getApiKey() == null) {
                throw new RESTException("Unknown source " + source, Response.Status.BAD_REQUEST);
            }
            FirebaseAppServiceAccount.getInstance().updateVetted(sourceAPIKeyOut, vetted);

        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("corporateKey/{apiKey}/{corporate}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "admin")
    @Operation(summary = "Setting an API Key to a corporate status.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "API Key set to a corporate status."
                )
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    public void corporateKey(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("apiKey") String apiKey, final @PathParam("corporate") boolean corporate) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, true);
            APIKeyOut sourceAPIKeyOut = FirebaseAppServiceAccount.getInstance().readAPIKey(apiKey.trim());
            if (sourceAPIKeyOut == null || sourceAPIKeyOut.getApiKey() == null) {
                throw new RESTException("Unknown source " + apiKey, Response.Status.BAD_REQUEST);
            }
            FirebaseAppServiceAccount.getInstance().updateCorporate(sourceAPIKeyOut, corporate);

        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("nameType/{properNoun}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "general")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely type of a proper noun (personal name, brand name, place name etc.)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A typed name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = ProperNounCategorizedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public ProperNounCategorizedOut nameType(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("properNoun") String properNoun) {
        // check API Key
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            NameIn input = new NameIn();
            input.setName(properNoun);
            input.setSource(api_key);

            ProperNounCategorizedOut result = processNameType(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    /**
     * In case no ID is passed, we generate a UUID
     *
     * @return
     */
    private String newUUID() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

    private ProperNounCategorizedOut processNameType(NameIn input, boolean incrementUsage) throws ClassifyException {
        // v2.0.12 B02 : fix null pointer exceptions when processing with CSV
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        AI.getInstance().assertFact(input);
        ProperNounCategorizedOut result = AI.getInstance().predictProperNounType(input, incrementUsage);
        return result;
    }

    private ProperNounCategorizedOut processNameTypeGeo(NameGeoIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        ProperNounCategorizedOut result = AI.getInstance().predictProperNounType(input, incrementUsage);
        return result;
    }

    @Path("nameTypeGeo/{properNoun}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "general")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely type of a proper noun (personal name, brand name, place name etc.)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A typed name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = ProperNounCategorizedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public ProperNounCategorizedOut nameTypeGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("properNoun") String properNoun, final @PathParam("countryIso2") String countryIso2) {
        // check API Key
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            NameGeoIn input = new NameGeoIn();
            input.setName(properNoun);
            input.setSource(api_key);
            input.setCountryIso2(countryIso2);
            ProperNounCategorizedOut result = processNameTypeGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("nameTypeBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "general")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)", hidden = false,
            requestBody = @RequestBody(
                    description = "A list of proper names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchNameIn.class,
                                    example = "{\n"
                                    + "  \"properNnames\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"name\": \"Mr. John Smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"name\": \"Avenue des Champs-Elysées\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"name\": \"Ringsys Computers Ltd\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of commonTypeized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchProperNounCategorizedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchProperNounCategorizedOut nameTypeBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            ProperNounCategorizedOut[] resultArr = new ProperNounCategorizedOut[body.getProperNouns().length];
            int i = 0;
            for (NameIn input : body.getProperNouns()) {
                input.setSource(api_key);
                ProperNounCategorizedOut result = processNameType(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchProperNounCategorizedOut result = new BatchProperNounCategorizedOut();
            result.setProperNouns(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("nameTypeGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "general")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)", hidden = false,
            requestBody = @RequestBody(
                    description = "A list of proper names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchNameGeoIn.class,
                                    example = "{\n"
                                    + "  \"properNnames\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"name\": \"Mr. John Smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"name\": \"Avenue des Champs-Elysées\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"name\": \"Ringsys Computers Ltd\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of commonTypeized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchProperNounCategorizedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchProperNounCategorizedOut nameTypeGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            ProperNounCategorizedOut[] resultArr = new ProperNounCategorizedOut[body.getProperNouns().length];
            int i = 0;
            for (NameGeoIn input : body.getProperNouns()) {
                input.setSource(api_key);
                String countryIso2 = verifyCountryIso2(input.getCountryIso2());
                input.setCountryIso2(countryIso2);
                ProperNounCategorizedOut result = processNameTypeGeo(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchProperNounCategorizedOut result = new BatchProperNounCategorizedOut();
            result.setProperNouns(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Two classified names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = CorridorOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public CorridorOut corridor(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("countryIso2From") String countryIso2From, final @PathParam("firstNameFrom") String firstNameFrom, final @PathParam("lastNameFrom") String lastNameFrom, final @PathParam("countryIso2To") String countryIso2To, final @PathParam("firstNameTo") String firstNameTo, final @PathParam("lastNameTo") String lastNameTo) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            CorridorIn input = new CorridorIn();

            FirstLastNameGeoIn inputFrom = new FirstLastNameGeoIn();
            inputFrom.setFirstName(firstNameFrom);
            inputFrom.setLastName(lastNameFrom);
            inputFrom.setCountryIso2(countryIso2From);
            inputFrom.setSource(api_key);

            FirstLastNameGeoIn inputTo = new FirstLastNameGeoIn();
            inputTo.setFirstName(firstNameTo);
            inputTo.setLastName(lastNameTo);
            inputTo.setCountryIso2(countryIso2To);
            inputTo.setSource(api_key);

            input.setFirstLastNameGeoFrom(inputFrom);
            input.setFirstLastNameGeoTo(inputTo);
            input.setSource(api_key);

            CorridorOut result = processCorridor(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private CorridorOut processCorridor(CorridorIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getFirstLastNameGeoFrom() == null) {
            throw new ClassifyException("Missing FirstLastNameGeoFrom or null");
        } else {
            if (input.getFirstLastNameGeoFrom().getId() == null) {
                input.getFirstLastNameGeoFrom().setId(newUUID());
            }
            if (input.getFirstLastNameGeoFrom().getFirstName() == null) {
                input.getFirstLastNameGeoFrom().setFirstName("");
            }
            if (input.getFirstLastNameGeoFrom().getLastName() == null) {
                input.getFirstLastNameGeoFrom().setLastName("");
            }
            if (input.getFirstLastNameGeoFrom().getCountryIso2() == null) {
                input.getFirstLastNameGeoFrom().setCountryIso2(CountryISO.US);
            }
        }
        if (input.getFirstLastNameGeoTo() == null) {
            throw new ClassifyException("Missing FirstLastNameGeoTo or null");
        } else {
            if (input.getFirstLastNameGeoTo().getId() == null) {
                input.getFirstLastNameGeoTo().setId(newUUID());
            }
            if (input.getFirstLastNameGeoTo().getFirstName() == null) {
                input.getFirstLastNameGeoTo().setFirstName("");
            }
            if (input.getFirstLastNameGeoTo().getLastName() == null) {
                input.getFirstLastNameGeoTo().setLastName("");
            }
            if (input.getFirstLastNameGeoTo().getCountryIso2() == null) {
                input.getFirstLastNameGeoTo().setCountryIso2(CountryISO.US);
            }
        }
        // so we can learn parsing
        {
            AI.getInstance().assertFact(input.getFirstLastNameGeoFrom());
            PersonalNameParsedGeoIn adapted = AINameParserClassifier.personalNameParsedGeo(input.getFirstLastNameGeoFrom(), input.getFirstLastNameGeoFrom(), true, false);
            AI.getInstance().assertFact(adapted);
        }
        {
            AI.getInstance().assertFact(input.getFirstLastNameGeoTo());
            PersonalNameParsedGeoIn adapted = AINameParserClassifier.personalNameParsedGeo(input.getFirstLastNameGeoTo(), input.getFirstLastNameGeoTo(), true, false);
            AI.getInstance().assertFact(adapted);
        }
        FirstLastNameGenderedOut firstLastNameGeoFromGender = AI.getInstance().predictGender(input.getFirstLastNameGeoFrom(), false);
        FirstLastNameGenderedOut firstLastNameGeoToGender = AI.getInstance().predictGender(input.getFirstLastNameGeoTo(), false);
        FirstLastNameOriginedOut firstLastNameGeoFromOrigin = AI.getInstance().predictOrigin(input.getFirstLastNameGeoFrom(), false);
        FirstLastNameOriginedOut firstLastNameGeoToOrigin = AI.getInstance().predictOrigin(input.getFirstLastNameGeoTo(), false);
        FirstLastNameDiasporaedOut firstLastNameGeoFromDiaspora = AI.getInstance().predictDiaspora(input.getFirstLastNameGeoFrom(), false);
        FirstLastNameDiasporaedOut firstLastNameGeoToDiaspora = AI.getInstance().predictDiaspora(input.getFirstLastNameGeoTo(), true);
        CorridorOut result = new CorridorOut();
        result.setId(input.getId());
        result.setFirstLastNameGeoFromGender(firstLastNameGeoFromGender);
        result.setFirstLastNameGeoToGender(firstLastNameGeoToGender);
        result.setFirstLastNameGeoFromOrigin(firstLastNameGeoFromOrigin);
        result.setFirstLastNameGeoToOrigin(firstLastNameGeoToOrigin);
        result.setFirstLastNameGeoFromDiaspora(firstLastNameGeoFromDiaspora);
        result.setFirstLastNameGeoToDiaspora(firstLastNameGeoToDiaspora);
        return result;
    }

    @Path("corridorBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)",
            requestBody = @RequestBody(
                    description = "A list of name pairs, with country code (nameFrom -> nameTo).",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchCorridorIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of classified name pairs.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchCorridorOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchCorridorOut corridorBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchCorridorIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            CorridorOut[] resultArr = new CorridorOut[body.getCorridorFromTo().length];
            int i = 0;
            for (CorridorIn input : body.getCorridorFromTo()) {
                input.setSource(api_key);
                if (input.getFirstLastNameGeoFrom() != null && input.getFirstLastNameGeoTo() != null) {
                    input.getFirstLastNameGeoFrom().setSource(api_key);
                    input.getFirstLastNameGeoTo().setSource(api_key);
                    CorridorOut result = processCorridor(input, true);
                    FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                    resultArr[i] = result;
                }
                i++;
            }
            BatchCorridorOut result = new BatchCorridorOut();
            result.setCorridorFromTo(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("gender/{firstName}/{lastName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a name.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FirstLastNameGenderedOut gender(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNameIn input = new FirstLastNameIn();
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);

            FirstLastNameGenderedOut result = processGender(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    FirstLastNameGenderedOut processGender(FirstLastNameIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        AI.getInstance().assertFact(input);
        // so we can learn parsing
        PersonalNameParsedIn adapted = AINameParserClassifier.personalNameParsed(input, true, false);
        AI.getInstance().assertFact(adapted);

        FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, incrementUsage);
        return result;
    }

    private FirstLastNameGenderedOut processGenderGeo(FirstLastNameGeoIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);

        // so we can learn parsing
        PersonalNameParsedGeoIn adapted = AINameParserClassifier.personalNameParsedGeo(input, input, true, false);
        AI.getInstance().assertFact(adapted);

        FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, incrementUsage);
        return result;
    }

    @Path("genderGeo/{firstName}/{lastName}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a name, given a local context (ISO2 country code).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNameGenderedOut genderGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName, final @PathParam("countryIso2") String countryIso2_) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String countryIso2 = verifyCountryIso2(countryIso2_);
            FirstLastNameGeoIn input = new FirstLastNameGeoIn();
            input.setCountryIso2(countryIso2);
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);
            FirstLastNameGenderedOut result = processGenderGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("genderGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).",
            requestBody = @RequestBody(
                    description = "A list of names, with country code.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameGeoIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"john\",\n"
                                    + "      \"lastName\": \"smith\",\n"
                                    + "      \"countryIso2\": \"FR\"\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"elena\",\n"
                                    + "      \"lastName\": \"rossini\",\n"
                                    + "      \"countryIso2\": \"IT\"\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"firstName\": \"michael\",\n"
                                    + "      \"lastName\": \"jackson\",\n"
                                    + "      \"countryIso2\": \"US\"\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchFirstLastNameGenderedOut genderGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameGeoIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                String countryIso2 = verifyCountryIso2(input.getCountryIso2());
                input.setCountryIso2(countryIso2);
                FirstLastNameGenderedOut result = processGenderGeo(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 names, detecting automatically the cultural context.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"john\",\n"
                                    + "      \"lastName\": \"smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"elena\",\n"
                                    + "      \"lastName\": \"rossini\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"firstName\": \"michael\",\n"
                                    + "      \"lastName\": \"jackson\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchFirstLastNameGenderedOut genderBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                FirstLastNameGenderedOut result = processGender(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderParsed/{prefixOrTitle}/{firstName}/{middleName}/{lastName}/{suffix}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a name, having a title/prefix, a first/middle/last names and suffix (ex. Mr. John H Doe Jr.)", hidden = true,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNameGenderedOut genderParsed(final @Context HttpServletRequest request, final @Context HttpServletResponse response,
            final @PathParam("prefixOrTitle") String prefixOrTitle,
            final @PathParam("firstName") String firstName,
            final @PathParam("middleName") String middleName,
            final @PathParam("lastName") String lastName,
            final @PathParam("suffix") String suffix) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            ParsedFullNameIn input = new ParsedFullNameIn();
            input.setPrefixOrTitle(prefixOrTitle);
            input.setFirstName(firstName);
            input.setMiddleName(middleName);
            input.setLastName(lastName);
            input.setSuffix(suffix);
            input.setSource(api_key);
            AI.getInstance().assertFact(input);

            // so we can learn parsing
            PersonalNameParsedIn adapted = AINameParserClassifier.personalNameParsed(input, true, false);
            AI.getInstance().assertFact(adapted);
            FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("parsedGenderBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchParsedFullNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameGenderedOut parsedGenderBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchParsedFullNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (ParsedFullNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                AI.getInstance().assertFact(input);
                // so we can learn parsing
                PersonalNameParsedIn adapted = AINameParserClassifier.personalNameParsed(input, true, false);
                AI.getInstance().assertFact(adapted);
                FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderParsedGeo/{prefixOrTitle}/{firstName}/{middleName}/{lastName}/{suffix}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a name, having a title/prefix, a first/middle/last names and suffix (ex. Mr. John H Doe Jr.), given a local context (country ISO2)", hidden = true,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNameGenderedOut genderParsedGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response,
            final @PathParam("prefixOrTitle") String prefixOrTitle,
            final @PathParam("firstName") String firstName,
            final @PathParam("middleName") String middleName,
            final @PathParam("lastName") String lastName,
            final @PathParam("suffix") String suffix,
            final @PathParam("countryIso2") String countryIso2_
    ) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String countryIso2 = verifyCountryIso2(countryIso2_);
            ParsedFullNameGeoIn input = new ParsedFullNameGeoIn();
            input.setPrefixOrTitle(prefixOrTitle);
            input.setFirstName(firstName);
            input.setMiddleName(middleName);
            input.setLastName(lastName);
            input.setSuffix(suffix);
            input.setSource(api_key);
            input.setCountryIso2(countryIso2);
            AI.getInstance().assertFact(input);

            FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("parsedGenderGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchParsedFullNameGeoIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameGenderedOut parsedGenderGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchParsedFullNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (ParsedFullNameGeoIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                String countryIso2 = verifyCountryIso2(input.getCountryIso2());
                input.setCountryIso2(countryIso2);
                AI.getInstance().assertFact(input);

                FirstLastNameGenderedOut result = AI.getInstance().predictGender(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("genderFullGeo/{fullName}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a full name, given a local context (ISO2 country code).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameGenderedOut genderFullGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("fullName") String fullName, final @PathParam("countryIso2") String countryIso2_) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String countryIso2 = verifyCountryIso2(countryIso2_);
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setCountryIso2(countryIso2);
            input.setName(fullName);
            input.setSource(api_key);
            PersonalNameGenderedOut result = processGenderFullGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private PersonalNameGenderedOut processGenderFullGeo(PersonalNameGeoIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        PersonalNameGenderedOut result = AI.getInstance().predictGender(input, incrementUsage);
        return result;
    }

    private PersonalNameGenderedOut processGenderFull(PersonalNameIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        AI.getInstance().assertFact(input);
        PersonalNameGenderedOut result = AI.getInstance().predictGender(input, incrementUsage);
        return result;
    }

    @Path("genderFull/{fullName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a full name, ex. John H. Smith",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameGenderedOut genderFull(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("fullName") String fullName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameIn input = new PersonalNameIn();
            input.setName(fullName);
            input.setSource(api_key);
            PersonalNameGenderedOut result = processGenderFull(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderFullBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 full names, detecting automatically the cultural context.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameGenderedOut genderFullBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameGenderedOut[] resultArr = new PersonalNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                PersonalNameGenderedOut result = processGenderFull(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameGenderedOut result = new BatchPersonalNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderFullGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).",
            requestBody = @RequestBody(
                    description = "A list of personal names, with a country ISO2 code",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameGeoIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameGenderedOut genderFullGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameGenderedOut[] resultArr = new PersonalNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                PersonalNameGenderedOut result = processGenderFull(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameGenderedOut result = new BatchPersonalNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("origin/{firstName}/{lastName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(
            summary = "[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameOriginedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FirstLastNameOriginedOut origin(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNameIn input = new FirstLastNameIn();
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);
            FirstLastNameOriginedOut result = processOrigin(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    private FirstLastNameOriginedOut processOrigin(FirstLastNameIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        AI.getInstance().assertFact(input);
        FirstLastNameOriginedOut result = AI.getInstance().predictOrigin(input, incrementUsage);
        return result;
    }

    @Path("originBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"john\",\n"
                                    + "      \"lastName\": \"smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"elena\",\n"
                                    + "      \"lastName\": \"rossini\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"firstName\": \"michael\",\n"
                                    + "      \"lastName\": \"jackson\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameOriginedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameOriginedOut originBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameOriginedOut[] resultArr = new FirstLastNameOriginedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                FirstLastNameOriginedOut result = processOrigin(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameOriginedOut result = new BatchFirstLastNameOriginedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("country/{personalNameFull}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameGeoOut.class)
                        ))
            },
            hidden = false
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public PersonalNameGeoOut country(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("personalNameFull") String personalNameFull) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameIn input = new PersonalNameIn();
            input.setName(personalNameFull);
            input.setSource(api_key);
            PersonalNameGeoOut result = processCountry(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private PersonalNameGeoOut processCountry(PersonalNameIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        AI.getInstance().assertFact(input);
        PersonalNameGeoOut result = AI.getInstance().predictCountry(input, incrementUsage);
        return result;
    }

    @Path("countryBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameGeoOut.class)
                        ))
            },
            hidden = false
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchPersonalNameGeoOut countryBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameGeoOut[] resultArr = new PersonalNameGeoOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                PersonalNameGeoOut result = processCountry(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameGeoOut result = new BatchPersonalNameGeoOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("usRaceEthnicity/{firstName}/{lastName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameUSRaceEthnicityOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FirstLastNameUSRaceEthnicityOut usRaceEthnicity(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        // from v2.0.14 allow to select 4 or 6 classes
        String taxoOption = request.getHeader(NAMSOR_OPTION_USRACEETHNICITY_TAXO);
        boolean use4or6classes = DEFAULT_USRACEETHNICITY_TAXO_USE4OR6CLASSES;
        if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_6CLASSES) ) {
            use4or6classes = false;
        } else if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_4CLASSES) ) {
            use4or6classes = true;
        }
        try {
            String countryIso2 = "US";
            FirstLastNameGeoIn input = new FirstLastNameGeoIn();
            input.setCountryIso2(countryIso2);
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);

            FirstLastNameUSRaceEthnicityOut result = processUSRaceEthnicity(input, true,use4or6classes);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    private FirstLastNameUSRaceEthnicityOut processUSRaceEthnicity(FirstLastNameGeoIn input, boolean incrementUsage, boolean useFourOrSixClasses) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        FirstLastNameUSRaceEthnicityOut result = AI.getInstance().predictUSRaceEthnicity(input, incrementUsage, useFourOrSixClasses);
        return result;
    }

    private FirstLastNameUSRaceEthnicityOut processUSRaceEthnicityZIP5(FirstLastNameGeoZippedIn input, boolean incrementUsage, boolean useFourOrSixClasses) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        if (input.getZipCode() == null) {
            input.setZipCode("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        FirstLastNameUSRaceEthnicityOut result = AI.getInstance().predictUSRaceEthnicity(input, incrementUsage, useFourOrSixClasses);
        return result;
    }

    @Path("usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameUSRaceEthnicityOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FirstLastNameUSRaceEthnicityOut usRaceEthnicityZIP5(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName, final @PathParam("zip5Code") String zip5Code) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        // from v2.0.14 allow to select 4 or 6 classes
        String taxoOption = request.getHeader(NAMSOR_OPTION_USRACEETHNICITY_TAXO);
        boolean use4or6classes = DEFAULT_USRACEETHNICITY_TAXO_USE4OR6CLASSES;
        if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_6CLASSES) ) {
            use4or6classes = false;
        } else if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_4CLASSES) ) {
            use4or6classes = true;
        }
        try {
            String countryIso2 = "US";
            FirstLastNameGeoZippedIn input = new FirstLastNameGeoZippedIn();
            input.setCountryIso2(countryIso2);
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);
            input.setZipCode(zip5Code);
            FirstLastNameUSRaceEthnicityOut result = processUSRaceEthnicityZIP5(input, true, use4or6classes);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("usRaceEthnicityBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameGeoIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"john\",\n"
                                    + "      \"lastName\": \"smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"elena\",\n"
                                    + "      \"lastName\": \"rossini\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"firstName\": \"michael\",\n"
                                    + "      \"lastName\": \"jackson\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameUSRaceEthnicityOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchFirstLastNameUSRaceEthnicityOut usRaceEthnicityBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        // from v2.0.14 allow to select 4 or 6 classes
        String taxoOption = request.getHeader(NAMSOR_OPTION_USRACEETHNICITY_TAXO);
        boolean use4or6classes = DEFAULT_USRACEETHNICITY_TAXO_USE4OR6CLASSES;
        if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_6CLASSES) ) {
            use4or6classes = false;
        } else if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_4CLASSES) ) {
            use4or6classes = true;
        }        
        try {
            FirstLastNameUSRaceEthnicityOut[] resultArr = new FirstLastNameUSRaceEthnicityOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameGeoIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                FirstLastNameUSRaceEthnicityOut result = processUSRaceEthnicity(input, true, use4or6classes);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameUSRaceEthnicityOut result = new BatchFirstLastNameUSRaceEthnicityOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("usZipRaceEthnicityBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameGeoZippedIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"john\",\n"
                                    + "      \"lastName\": \"smith\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"elena\",\n"
                                    + "      \"lastName\": \"rossini\",\n"
                                    + "    }, \n"
                                    + "	{\n"
                                    + "      \"id\": \"12\",\n"
                                    + "      \"firstName\": \"michael\",\n"
                                    + "      \"lastName\": \"jackson\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameUSRaceEthnicityOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameUSRaceEthnicityOut usZipRaceEthnicityBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGeoZippedIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        // from v2.0.14 allow to select 4 or 6 classes
        String taxoOption = request.getHeader(NAMSOR_OPTION_USRACEETHNICITY_TAXO);
        boolean use4or6classes = DEFAULT_USRACEETHNICITY_TAXO_USE4OR6CLASSES;
        if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_6CLASSES) ) {
            use4or6classes = false;
        } else if( taxoOption != null && taxoOption.equals(NAMSOR_OPTION_USRACEETHNICITY_TAXO_4CLASSES) ) {
            use4or6classes = true;
        }        
        try {
            FirstLastNameUSRaceEthnicityOut[] resultArr = new FirstLastNameUSRaceEthnicityOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameGeoZippedIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                FirstLastNameUSRaceEthnicityOut result = processUSRaceEthnicityZIP5(input, true, use4or6classes);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameUSRaceEthnicityOut result = new BatchFirstLastNameUSRaceEthnicityOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("diaspora/{countryIso2}/{firstName}/{lastName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A diaspora / ethnicity for given name and geography.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameDiasporaedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FirstLastNameDiasporaedOut diaspora(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("countryIso2") String countryIso2, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNameGeoIn input = new FirstLastNameGeoIn();
            input.setCountryIso2(countryIso2);
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);

            FirstLastNameDiasporaedOut result = processDiaspora(input);

            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    private FirstLastNameDiasporaedOut processDiaspora(FirstLastNameGeoIn input) throws ClassifyException {
        String countryIso2 = verifyCountryIso2(input.getCountryIso2());
        input.setCountryIso2(countryIso2);
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getFirstName() == null) {
            input.setFirstName("");
        }
        if (input.getLastName() == null) {
            input.setLastName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        FirstLastNameDiasporaedOut result = AI.getInstance().predictDiaspora(input, true);
        String ethnoV2 = AI.getInstance().getParsedNameDiasporaClassifier().getDiasporaV2().ethno(input.getCountryIso2(), input.getLastName().trim().toLowerCase());
        if (result.getEthnicity() != null && ethnoV2 != null) {
            if (result.getEthnicity().equals(ethnoV2)) {
                /*FirstLastNameGeoDiasporaIn diaspora = new FirstLastNameGeoDiasporaIn();
                diaspora.setSource(input.getSource());
                diaspora.setFirstName(input.getFirstName());
                diaspora.setLastName(input.getLastName());
                diaspora.setEthnicity(ethnoV2);
                diaspora.setCountryIso2(input.getCountryIso2());
                AI.getInstance().assertFact(diaspora);*/
                Logger.getLogger(getClass().getName()).info("result.getEthnicity().equals(ethnoV2) " + input.key() + " ethnoV2=" + ethnoV2);
            } else {
                /*FirstLastNameGeoDiasporaIn diaspora = new FirstLastNameGeoDiasporaIn();
                diaspora.setSource(input.getSource());
                diaspora.setFirstName(input.getFirstName());
                diaspora.setLastName(input.getLastName());
                diaspora.setEthnicity(ethnoV2);
                diaspora.setCountryIso2(input.getCountryIso2());
                AI.getInstance().assertFact(diaspora);                
                 */
                Logger.getLogger(getClass().getName()).info("!result.getEthnicity().equals(ethnoV2) " + input.key() + " ethnoV2=" + ethnoV2 + " result.getEthnicity()=" + result.getEthnicity());
                result.setEthnicityAlt(result.getEthnicity());
                result.setEthnicity(ethnoV2);
                result.setLifted(true);
            }
        } else if (result.getEthnicity() != null && ethnoV2 == null) {
            Logger.getLogger(getClass().getName()).info("ethnoV2 unknown (null) for " + input.key() + " result.getEthnicity()=" + result.getEthnicity());
        }
        return result;
    }

    @Path("diasporaBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameGeoIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of diaspora / ethnicity given a name and residency.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameDiasporaedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameDiasporaedOut diasporaBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameDiasporaedOut[] resultArr = new FirstLastNameDiasporaedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameGeoIn input : body.getPersonalNames()) {
                input.setSource(api_key);

                FirstLastNameDiasporaedOut result = processDiaspora(input);

                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameDiasporaedOut result = new BatchFirstLastNameDiasporaedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("parseName/{nameFull}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. ", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameParsedOut parseName(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("nameFull") String nameFull) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String nameFullFixed = nameFull.replace("+", " ");
            PersonalNameIn input = new PersonalNameIn();
            input.setName(nameFullFixed);
            input.setSource(api_key);

            PersonalNameParsedOut result = processParseName(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private PersonalNameParsedOut processParseName(PersonalNameIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        AI.getInstance().assertFact(input);
        PersonalNameParsedOut result = AI.getInstance().predictParserType(input, incrementUsage);
        return result;
    }

    private PersonalNameParsedOut processParseNameGeo(PersonalNameGeoIn input, boolean incrementUsage) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.US);
        }
        AI.getInstance().assertFact(input);
        PersonalNameParsedOut result = AI.getInstance().predictParserType(input, incrementUsage);
        return result;
    }

    @Path("parseName/{nameFull}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameParsedOut parseNameGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("nameFull") String nameFull, final @PathParam("countryIso2") String countryIso2) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String nameFullFixed = nameFull.replace("+", " ");
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setName(nameFullFixed);
            input.setSource(api_key);
            input.setCountryIso2(countryIso2);
            PersonalNameParsedOut result = processParseNameGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("parseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of parsed names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameParsedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameParsedOut parseNameBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameParsedOut[] resultArr = new PersonalNameParsedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                PersonalNameParsedOut result = processParseName(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameParsedOut result = new BatchPersonalNameParsedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("parseNameGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "personal")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameGeoIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of parsed names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameParsedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameParsedOut parseNameGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameParsedOut[] resultArr = new PersonalNameParsedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameGeoIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                PersonalNameParsedOut result = processParseNameGeo(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameParsedOut result = new BatchPersonalNameParsedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("parseChineseName/{chineseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameParsedOut parseChineseName(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseName") String chineseName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setName(chineseName);
            input.setSource(api_key);
            input.setCountryIso2(CountryISO.CN);
            PersonalNameParsedOut result = processParseNameGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("parseChineseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of parsed names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameParsedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameParsedOut parseChineseNameBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameParsedOut[] resultArr = new PersonalNameParsedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);

                PersonalNameGeoIn inputGeo = new PersonalNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setName(input.getName());
                inputGeo.setSource(api_key);
                inputGeo.setCountryIso2(CountryISO.CN);

                PersonalNameParsedOut result = processParseNameGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameParsedOut result = new BatchPersonalNameParsedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("pinyinChineseName/{chineseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A pinyin name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameParsedOut pinyinChineseName(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseName") String chineseName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setName(chineseName);
            input.setSource(api_key);
            input.setCountryIso2(CountryISO.CN);

            PersonalNameParsedOut result = processPinyinChineseName(input);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private PersonalNameParsedOut processPinyinChineseName(PersonalNameGeoIn input) throws ClassifyException {
        if (input.getId() == null) {
            input.setId(newUUID());
        }
        if (input.getName() == null) {
            input.setName("");
        }
        if (input.getCountryIso2() == null) {
            input.setCountryIso2(CountryISO.CN);
        }
        AI.getInstance().assertFact(input);
        PersonalNameParsedOut result = AI.getInstance().predictParserType(input, true);
        if (result.getFirstLastName() != null && result.getFirstLastName().getFirstName() != null && result.getFirstLastName().getLastName() != null) {
            try {
                String firstNamePY = ChinesePinyinUtil.piyin(result.getFirstLastName().getFirstName());
                result.getFirstLastName().setFirstName(firstNamePY);
            } catch (IllegalPinyinException ex) {
                Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, "Failed to pinyin firstName " + result.getFirstLastName().getFirstName(), ex);
            }
            try {
                String lastNamePY = ChinesePinyinUtil.piyin(result.getFirstLastName().getLastName());
                result.getFirstLastName().setLastName(lastNamePY);
            } catch (IllegalPinyinException ex) {
                Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, "Failed to pinyin lastName " + result.getFirstLastName().getLastName(), ex);
            }
        }
        return result;
    }

    @Path("pinyinChineseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).",
            requestBody = @RequestBody(
                    description = "A list of Chinese names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of Pinyin names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameParsedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchPersonalNameParsedOut pinyinChineseNameBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameParsedOut[] resultArr = new PersonalNameParsedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);

                PersonalNameGeoIn inputGeo = new PersonalNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setName(input.getName());
                inputGeo.setSource(api_key);
                inputGeo.setCountryIso2(CountryISO.CN);
                PersonalNameParsedOut result = processPinyinChineseName(inputGeo);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameParsedOut result = new BatchPersonalNameParsedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchedOut chineseNameMatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseSurnameLatin") String chineseSurnameLatin, final @PathParam("chineseGivenNameLatin") String chineseGivenNameLatin, final @PathParam("chineseName") String chineseName) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);

            FirstLastNameIn input1 = new FirstLastNameIn();
            input1.setSource(api_key);
            input1.setFirstName(chineseGivenNameLatin);
            input1.setLastName(chineseSurnameLatin);

            PersonalNameIn input2 = new PersonalNameIn();
            input2.setSource(api_key);
            input2.setName(chineseName);

            MatchPersonalFirstLastNameIn input = new MatchPersonalFirstLastNameIn();
            input.setSource(api_key);
            input.setName1(input1);
            input.setName2(input2);

            NameMatchedOut result = chineseNameMatchProcess(input);

            List<String> features = new ArrayList();
            features.add("CHINESE");
            APICounterManager.getInstance().incrementUsage(input, "chineseNameMatching", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private NameMatchedOut chineseNameMatchProcess(MatchPersonalFirstLastNameIn input) throws SQLException, ClassNotFoundException {
        //AI.getInstance().assertFact(input);
        NameMatchedOut matched = new NameMatchedOut();
        matched.setMatchStatus(Matched.MISMATCH);
        matched.setScore(0);

        FirstLastNameGeoIn latin = new FirstLastNameGeoIn();
        latin.setSource(input.getSource());
        latin.setFirstName(input.getName1().getFirstName());
        latin.setLastName(input.getName1().getLastName());
        latin.setCountryIso2(CountryISO.CN);
        AI.getInstance().assertFact(latin);

        PersonalNameGeoIn chinese = new PersonalNameGeoIn();
        chinese.setSource(input.getSource());
        chinese.setCountryIso2(CountryISO.CN);
        chinese.setName(input.getName2().getName());

        List<RomanToChineseNameCandidate> candidates = RomanToChineseNameMatcher.match(latin.getFirstName(), latin.getLastName(), null, false);
        if (candidates.isEmpty()) {
            candidates = RomanToChineseNameMatcher.match(latin.getFirstName(), latin.getLastName(), null, true);
        }
        // normalize probability to ONE 
        double pNorm = 0;
        for (RomanToChineseNameCandidate candidate : candidates) {
            pNorm += candidate.getProbability();
        }
        for (RomanToChineseNameCandidate candidate : candidates) {
            NameMatchCandidateOut candidateOut = new NameMatchCandidateOut();
            candidateOut.setCandidateName(candidate.chineseNameFull());
            if (pNorm > 0) {
                candidateOut.setProbability(candidate.getProbability() / pNorm);
            } else {
                candidateOut.setProbability(candidate.getProbability());
            }
            if (candidateOut.getCandidateName().equals(chinese.getName())) {
                // we have a match : 0.71 to 1 
                double score = Math.sqrt(1 + candidate.getProbability());
                matched.setMatchStatus(Matched.MATCH);
                matched.setScore(score);
            }
        }
        return matched;
    }

    @Path("chineseNameMatchBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
            requestBody = @RequestBody(
                    description = "A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchedOut chineseNameMatchBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchMatchPersonalFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        NameMatchedOut[] resultArr = new NameMatchedOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("CHINESE");
            for (MatchPersonalFirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchedOut result = chineseNameMatchProcess(input);
                APICounterManager.getInstance().incrementUsage(input, "chineseNameMatching", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchedOut result = new BatchNameMatchedOut();
            result.setMatchedNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private void checkChineseNameHAN(String name) throws RESTException {
        String scriptName = ScriptUtil.computeScriptFirst(name);
        if (scriptName == null || !scriptName.equals("HAN")) {
            throw new RESTException("HAN name expected, input is not a Chinese name : " + name, Response.Status.BAD_REQUEST);
        }
    }

    @Path("genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a Chinese name in LATIN (Pinyin).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNameGenderedOut genderChineseNamePinyin(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseSurnameLatin") String chineseSurnameLatin, final @PathParam("chineseGivenNameLatin") String chineseGivenNameLatin) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNameGeoIn input = new FirstLastNameGeoIn();
            input.setCountryIso2(CountryISO.CN);
            input.setFirstName(chineseGivenNameLatin);
            input.setLastName(chineseSurnameLatin);
            input.setSource(api_key);
            FirstLastNameGenderedOut result = processGenderGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("genderChineseNamePinyinBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).",
            requestBody = @RequestBody(
                    description = "A list of names, with country code.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"jing\",\n"
                                    + "      \"lastName\": \"cao\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"xiaoming\",\n"
                                    + "      \"lastName\": \"wang\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameGenderedOut genderChineseNamePinyinBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameIn input : body.getPersonalNames()) {
                FirstLastNameGeoIn inputGeo = new FirstLastNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setFirstName(input.getFirstName());
                inputGeo.setLastName(input.getLastName());
                inputGeo.setCountryIso2(CountryISO.CN);
                inputGeo.setSource(api_key);
                FirstLastNameGenderedOut result = processGenderGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderChineseName/{chineseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a Chinese full name ex. 王晓明",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameGenderedOut genderChineseName(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseName") String chineseName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            checkChineseNameHAN(chineseName);

            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setCountryIso2(CountryISO.CN);
            input.setName(chineseName);
            input.setSource(api_key);
            PersonalNameGenderedOut result = processGenderFullGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderChineseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 full names ex. 王晓明",
            requestBody = @RequestBody(
                    description = "A list of personal names, with a country ISO2 code",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchPersonalNameGenderedOut genderChineseNameBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameGenderedOut[] resultArr = new PersonalNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                checkChineseNameHAN(input.getName());

                PersonalNameGeoIn inputGeo = new PersonalNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setName(input.getName());
                inputGeo.setCountryIso2(CountryISO.CN);
                inputGeo.setSource(api_key);
                PersonalNameGenderedOut result = processGenderFullGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameGenderedOut result = new BatchPersonalNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchCandidatesOut chineseNameCandidates(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseSurnameLatin") String chineseSurnameLatin, final @PathParam("chineseGivenNameLatin") String chineseGivenNameLatin) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            FirstLastNameIn input = new FirstLastNameIn();
            input.setSource(api_key);
            input.setFirstName(chineseGivenNameLatin);
            input.setLastName(chineseSurnameLatin);

            NameMatchCandidatesOut result = chineseNameCandidatesProcess(input);

            List<String> features = new ArrayList();
            features.add("CHINESE");
            APICounterManager.getInstance().incrementUsage(input, "chineseNameCandidates", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private NameMatchCandidatesOut chineseNameCandidatesProcess(FirstLastNameIn input) throws SQLException, ClassNotFoundException {
        AI.getInstance().assertFact(input);

        FirstLastNameGeoIn origin = new FirstLastNameGeoIn();
        origin.setSource(input.getSource());
        origin.setFirstName(input.getFirstName());
        origin.setLastName(input.getLastName());
        origin.setCountryIso2(CountryISO.CN);
        AI.getInstance().assertFact(origin);

        List<NameMatchCandidateOut> candidatesOut = new ArrayList();
        List<RomanToChineseNameCandidate> candidates = RomanToChineseNameMatcher.match(input.getFirstName(), input.getLastName(), null, false);
        if (candidates.isEmpty()) {
            candidates = RomanToChineseNameMatcher.match(input.getFirstName(), input.getLastName(), null, true);
        }
        // normalize probability to ONE 
        double pNorm = 0;
        for (RomanToChineseNameCandidate candidate : candidates) {
            pNorm += candidate.getProbability();
        }
        for (RomanToChineseNameCandidate candidate : candidates) {
            NameMatchCandidateOut candidateOut = new NameMatchCandidateOut();
            candidateOut.setCandidateName(candidate.chineseNameFull());
            if (pNorm > 0) {
                candidateOut.setProbability(candidate.getProbability() / pNorm);
            } else {
                candidateOut.setProbability(candidate.getProbability());
            }
            candidatesOut.add(candidateOut);
        }
        NameMatchCandidatesOut result = new NameMatchCandidatesOut();
        result.setFirstName(input.getFirstName());
        result.setLastName(input.getLastName());
        result.setMatchCandidates(candidatesOut);
        result.setId(input.getId());
        return result;
    }

    @Path("chineseNameCandidatesBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
            requestBody = @RequestBody(
                    description = "A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchCandidatesOut chineseNameCandidatesBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        NameMatchCandidatesOut[] resultArr = new NameMatchCandidatesOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("CHINESE");
            for (FirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchCandidatesOut result = chineseNameCandidatesProcess(input);
                APICounterManager.getInstance().incrementUsage(input, "chineseNameCandidates", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchCandidatesOut result = new BatchNameMatchCandidatesOut();
            result.setNamesAndMatchCandidates(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchCandidatesOut chineseNameGenderCandidates(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("chineseSurnameLatin") String chineseSurnameLatin, final @PathParam("chineseGivenNameLatin") String chineseGivenNameLatin, final @PathParam("knownGender") String knownGender) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            FirstLastNameGenderIn input = new FirstLastNameGenderIn();
            input.setSource(api_key);
            input.setFirstName(chineseGivenNameLatin);
            input.setLastName(chineseSurnameLatin);
            input.setGender(knownGender);

            NameMatchCandidatesOut result = chineseNameCandidatesGenderProcess(input);

            List<String> features = new ArrayList();
            features.add("CHINESE");
            APICounterManager.getInstance().incrementUsage(input, "chineseNameCandidates", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private NameMatchCandidatesOut chineseNameCandidatesGenderProcess(FirstLastNameGenderIn input) throws SQLException, ClassNotFoundException {
        AI.getInstance().assertFact(input);

        FirstLastNameGeoGenderIn origin = new FirstLastNameGeoGenderIn();
        origin.setSource(input.getSource());
        origin.setFirstName(input.getFirstName());
        origin.setLastName(input.getLastName());
        origin.setCountryIso2(CountryISO.CN);
        origin.setGender(input.getGender());
        AI.getInstance().assertFact(origin);

        List<NameMatchCandidateOut> candidatesOut = new ArrayList();
        String mOrF = null;
        if (input.getGender() == null) {
            // we don't know
        } else if (input.getGender().equals(Gendered.MALE)) {
            mOrF = "M";
        } else if (input.getGender().equals(Gendered.FEMALE)) {
            mOrF = "F";
        }
        List<RomanToChineseNameCandidate> candidates = RomanToChineseNameMatcher.match(input.getFirstName(), input.getLastName(), mOrF, false);
        if (candidates.isEmpty()) {
            candidates = RomanToChineseNameMatcher.match(input.getFirstName(), input.getLastName(), mOrF, true);
        }
        for (RomanToChineseNameCandidate candidate : candidates) {
            NameMatchCandidateOut candidateOut = new NameMatchCandidateOut();
            candidateOut.setCandidateName(candidate.chineseNameFull());
            candidateOut.setProbability(candidate.getProbability());
            candidatesOut.add(candidateOut);
        }
        NameMatchCandidatesOut result = new NameMatchCandidatesOut();
        result.setFirstName(input.getFirstName());
        result.setLastName(input.getLastName());
        result.setMatchCandidates(candidatesOut);
        result.setId(input.getId());
        return result;
    }

    @Path("chineseNameCandidatesGenderBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "chinese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.",
            requestBody = @RequestBody(
                    description = "A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchCandidatesOut chineseNameCandidatesGenderBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGenderIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        NameMatchCandidatesOut[] resultArr = new NameMatchCandidatesOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("CHINESE");
            for (FirstLastNameGenderIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchCandidatesOut result = chineseNameCandidatesGenderProcess(input);
                APICounterManager.getInstance().incrementUsage(input, "chineseNameCandidates", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchCandidatesOut result = new BatchNameMatchCandidatesOut();
            result.setNamesAndMatchCandidates(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (SQLException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("parseJapaneseName/{japaneseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae", hidden = false,
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A origined name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameParsedOut parseJapaneseName(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseName") String japaneseName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setName(japaneseName);
            input.setSource(api_key);
            input.setCountryIso2(CountryISO.JP);
            PersonalNameParsedOut result = processParseNameGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("parseJapaneseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae ",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of parsed names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameParsedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchPersonalNameParsedOut parseJapaneseNameBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameParsedOut[] resultArr = new PersonalNameParsedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);

                PersonalNameGeoIn inputGeo = new PersonalNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setName(input.getName());
                inputGeo.setSource(api_key);
                inputGeo.setCountryIso2(CountryISO.JP);
                PersonalNameParsedOut result = processParseNameGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameParsedOut result = new BatchPersonalNameParsedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchCandidatesOut japaneseNameKanjiCandidates(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurnameLatin") String japaneseSurnameLatin, final @PathParam("japaneseGivenNameLatin") String japaneseGivenNameLatin) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            FirstLastNameIn input = new FirstLastNameIn();
            input.setSource(api_key);
            input.setFirstName(japaneseGivenNameLatin);
            input.setLastName(japaneseSurnameLatin);

            String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
            RomanToJapaneseNameMatcher.OrderOption orderOption = null;
            if (orderOption_ != null) {
                orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
            } else {
                orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
            }

            NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, true, null, orderOption);

            List<String> features = new ArrayList();
            features.add("japanese");
            APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("OpenNMT API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchCandidatesOut japaneseNameKanjiCandidates(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurnameLatin") String japaneseSurnameLatin, final @PathParam("japaneseGivenNameLatin") String japaneseGivenNameLatin, final @PathParam("knownGender") String knownGender) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            FirstLastNameIn input = new FirstLastNameIn();
            input.setSource(api_key);
            input.setFirstName(japaneseGivenNameLatin);
            input.setLastName(japaneseSurnameLatin);

            String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
            RomanToJapaneseNameMatcher.OrderOption orderOption = null;
            if (orderOption_ != null) {
                orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
            } else {
                orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
            }

            NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, true, knownGender, orderOption);

            List<String> features = new ArrayList();
            features.add("japanese");
            APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("OpenNMT API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Romanize japanese name, based on the name in Kanji.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchCandidatesOut japaneseNameLatinCandidates(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurnameKanji") String japaneseSurnameKanji, final @PathParam("japaneseGivenNameKanji") String japaneseGivenNameKanji) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            FirstLastNameIn input = new FirstLastNameIn();
            input.setSource(api_key);
            input.setFirstName(japaneseGivenNameKanji);
            input.setLastName(japaneseSurnameKanji);

            String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
            RomanToJapaneseNameMatcher.OrderOption orderOption = null;
            if (orderOption_ != null) {
                orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
            } else {
                orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
            }
            NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, false, null, orderOption);

            List<String> features = new ArrayList();
            features.add("japanese");
            APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("OpenNMT API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private NameMatchCandidatesOut japaneseNameCandidatesProcess(FirstLastNameIn input, boolean enToJpOrReverse, String genderOrNull, RomanToJapaneseNameMatcher.OrderOption orderOption) throws OpenNMTException {
        AI.getInstance().assertFact(input);

        FirstLastNameGeoIn origin = new FirstLastNameGeoIn();
        origin.setSource(input.getSource());
        origin.setFirstName(input.getFirstName());
        origin.setLastName(input.getLastName());
        origin.setCountryIso2(CountryISO.JP);
        AI.getInstance().assertFact(origin);

        List<NameMatchCandidateOut> candidatesOut = new ArrayList();
        List<RomanToJapaneseNameCandidate> candidates = RomanToJapaneseNameMatcher.match(input.getFirstName(), input.getLastName(), enToJpOrReverse, genderOrNull, orderOption);
        if (candidates.isEmpty()) {
            candidates = RomanToJapaneseNameMatcher.match(input.getLastName(), input.getFirstName(), enToJpOrReverse, genderOrNull, orderOption);
        }
        // normalize probability to ONE 
        double pNorm = 0;
        for (RomanToJapaneseNameCandidate candidate : candidates) {
            pNorm += candidate.getProbability();
        }
        for (RomanToJapaneseNameCandidate candidate : candidates) {
            NameMatchCandidateOut candidateOut = new NameMatchCandidateOut();
            candidateOut.setCandidateName(candidate.japaneseNameFull(true));
            if (pNorm > 0) {
                candidateOut.setProbability(candidate.getProbability() / pNorm);
            } else {
                candidateOut.setProbability(candidate.getProbability());
            }
            candidateOut.setPredScoreFamilyName(candidate.getPredScoreFamilyName());
            candidateOut.setPredScoreGivenName(candidate.getPredScoreGivenName());
            candidatesOut.add(candidateOut);
        }
        String scriptName = ScriptUtil.computeScript(input.getFirstName() + input.getLastName());
        NameMatchCandidatesOut result = new NameMatchCandidatesOut();
        result.setScript(scriptName);
        result.setOrderOption(orderOption.name());
        result.setFirstName(input.getFirstName());
        result.setLastName(input.getLastName());
        result.setMatchCandidates(candidatesOut);
        result.setId(input.getId());
        return result;
    }

    @Path("japaneseNameKanjiCandidatesBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae",
            requestBody = @RequestBody(
                    description = "A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchCandidatesOut japaneseNameKanjiCandidatesBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
        RomanToJapaneseNameMatcher.OrderOption orderOption = null;
        if (orderOption_ != null) {
            orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
        } else {
            orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
        }
        NameMatchCandidatesOut[] resultArr = new NameMatchCandidatesOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("japanese");
            for (FirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, true, null, orderOption);
                APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchCandidatesOut result = new BatchNameMatchCandidatesOut();
            result.setNamesAndMatchCandidates(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameGenderKanjiCandidatesBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae",
            requestBody = @RequestBody(
                    description = "A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname and known gender",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchCandidatesOut japaneseNameGenderKanjiCandidatesBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameGenderIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
        RomanToJapaneseNameMatcher.OrderOption orderOption = null;
        if (orderOption_ != null) {
            orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
        } else {
            orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
        }
        NameMatchCandidatesOut[] resultArr = new NameMatchCandidatesOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("japanese");
            for (FirstLastNameGenderIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, true, input.getGender(), orderOption);
                APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchCandidatesOut result = new BatchNameMatchCandidatesOut();
            result.setNamesAndMatchCandidates(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameLatinCandidatesBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Romanize japanese names, based on the name in KANJI",
            requestBody = @RequestBody(
                    description = "A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchCandidatesOut japaneseNameLatinCandidatesBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
        RomanToJapaneseNameMatcher.OrderOption orderOption = null;
        if (orderOption_ != null) {
            orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
        } else {
            orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
        }
        NameMatchCandidatesOut[] resultArr = new NameMatchCandidatesOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("japanese");
            for (FirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchCandidatesOut result = japaneseNameCandidatesProcess(input, false, null, orderOption);
                APICounterManager.getInstance().incrementUsage(input, "japaneseNameCandidates", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchCandidatesOut result = new BatchNameMatchCandidatesOut();
            result.setNamesAndMatchCandidates(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public NameMatchedOut japaneseNameMatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurnameLatin") String japaneseSurnameLatin, final @PathParam("japaneseGivenNameLatin") String japaneseGivenNameLatin, final @PathParam("japaneseName") String japaneseName) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
            RomanToJapaneseNameMatcher.OrderOption orderOption = null;
            if (orderOption_ != null) {
                orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
            } else {
                orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
            }

            FirstLastNameIn input1 = new FirstLastNameIn();
            input1.setSource(api_key);
            input1.setFirstName(japaneseGivenNameLatin);
            input1.setLastName(japaneseSurnameLatin);

            PersonalNameIn input2 = new PersonalNameIn();
            input2.setSource(api_key);
            input2.setName(japaneseName);

            MatchPersonalFirstLastNameIn input = new MatchPersonalFirstLastNameIn();
            input.setSource(api_key);
            input.setName1(input1);
            input.setName2(input2);

            NameMatchedOut result = japaneseNameMatchProcess(input, null, orderOption);

            List<String> features = new ArrayList();
            features.add("JAPANESE");
            APICounterManager.getInstance().incrementUsage(input, "japaneseNameMatching", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A romanized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = RomanizedNameOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public FeedbackLoopOut japaneseNameMatchFeedbackLoop(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurnameLatin") String japaneseSurnameLatin, final @PathParam("japaneseGivenNameLatin") String japaneseGivenNameLatin, final @PathParam("japaneseName") String japaneseName) {
        try {
            // check API Key
            APIKeyOut api_key = checkAPIKey(request, false, false);
            String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
            RomanToJapaneseNameMatcher.OrderOption orderOption = null;
            if (orderOption_ != null) {
                orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
            } else {
                orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
            }

            FirstLastNameIn input1 = new FirstLastNameIn();
            input1.setSource(api_key);
            input1.setFirstName(japaneseGivenNameLatin);
            input1.setLastName(japaneseSurnameLatin);

            PersonalNameIn input2 = new PersonalNameIn();
            input2.setSource(api_key);
            input2.setName(japaneseName);

            MatchPersonalFirstLastNameIn input = new MatchPersonalFirstLastNameIn();
            input.setSource(api_key);
            input.setName1(input1);
            input.setName2(input2);

            NameMatchedOut resultMatch = japaneseNameMatchProcess(input, null, orderOption);

            // assert the fact 
            AI.getInstance().assertFact(input);

            List<String> features = new ArrayList();
            features.add("JAPANESE");
            APICounterManager.getInstance().incrementUsage(input, "japaneseNameMatching", features);
            FactInOutLoggerManager.getInstance().appendLog(request, input, resultMatch);
            checkAPIKeyEnabled(api_key);
            FeedbackLoopOut result = new FeedbackLoopOut();
            if (api_key.isLearnable()) {
                long credited = APICounterManager.getInstance().creditUsage(input2, 1);
                result.setFeedbackCredits(credited);
            }
            return result;
        } catch (Exception ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private NameMatchedOut japaneseNameMatchProcess(MatchPersonalFirstLastNameIn input, String gender, RomanToJapaneseNameMatcher.OrderOption orderOption) throws OpenNMTException {
        //AI.getInstance().assertFact(input);
        NameMatchedOut matched = new NameMatchedOut();
        matched.setMatchStatus(Matched.MISMATCH);
        matched.setScore(0);

        FirstLastNameGeoIn latin = new FirstLastNameGeoIn();
        latin.setSource(input.getSource());
        latin.setFirstName(input.getName1().getFirstName());
        latin.setLastName(input.getName1().getLastName());
        latin.setCountryIso2(CountryISO.JP);
        AI.getInstance().assertFact(latin);

        PersonalNameGeoIn japanese = new PersonalNameGeoIn();
        japanese.setSource(input.getSource());
        japanese.setCountryIso2(CountryISO.JP);
        japanese.setName(input.getName2().getName());

        List<RomanToJapaneseNameCandidate> candidates = RomanToJapaneseNameMatcher.match(latin.getFirstName(), latin.getLastName(), true, null, orderOption);
        if (candidates.isEmpty()) {
            candidates = RomanToJapaneseNameMatcher.match(latin.getLastName(), latin.getFirstName(), true, null, orderOption);
        }

        // normalize probability to ONE 
        double pNorm = 0;
        for (RomanToJapaneseNameCandidate candidate : candidates) {
            pNorm += candidate.getProbability();
        }
        for (RomanToJapaneseNameCandidate candidate : candidates) {
            NameMatchCandidateOut candidateOut = new NameMatchCandidateOut();
            candidateOut.setCandidateName(candidate.japaneseNameFull(true));
            if (pNorm > 0) {
                candidateOut.setProbability(candidate.getProbability() / pNorm);
            } else {
                candidateOut.setProbability(candidate.getProbability());
            }
            if (candidateOut.getCandidateName().equals(japanese.getName())) {
                // we have a match : 0.71 to 1 
                double score = Math.sqrt(1 + candidate.getProbability());
                matched.setMatchStatus(Matched.MATCH);
                matched.setScore(score);
            }
        }
        return matched;
    }

    @Path("japaneseNameMatchBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae",
            requestBody = @RequestBody(
                    description = "A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class)
                    )),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of matched names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchNameMatchCandidatesOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchNameMatchedOut japaneseNameMatchBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchMatchPersonalFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        String orderOption_ = request.getHeader(NAMSOR_OPTION_JPNAME_ORDER);
        RomanToJapaneseNameMatcher.OrderOption orderOption = null;
        if (orderOption_ != null) {
            orderOption = RomanToJapaneseNameMatcher.OrderOption.valueOf(orderOption_);
        } else {
            orderOption = RomanToJapaneseNameMatcher.DEFAULT_ORDER;
        }
        NameMatchedOut[] resultArr = new NameMatchedOut[body.getPersonalNames().length];
        int i = 0;
        try {
            List<String> features = new ArrayList();
            features.add("JAPANESE");
            for (MatchPersonalFirstLastNameIn input : body.getPersonalNames()) {
                input.setSource(api_key);
                NameMatchedOut result = japaneseNameMatchProcess(input, null, orderOption);
                APICounterManager.getInstance().incrementUsage(input, "japaneseNameMatching", features);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchNameMatchedOut result = new BatchNameMatchedOut();
            result.setMatchedNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;

        } catch (OpenNMTException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("API Exception " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    @Path("genderJapaneseName/{japaneseSurname}/{japaneseGivenName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a Japanese name in LATIN (Pinyin).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNameGenderedOut genderJapaneseNamePinyin(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseSurname") String japaneseSurname, final @PathParam("japaneseGivenName") String japaneseGivenName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNameGeoIn input = new FirstLastNameGeoIn();
            input.setCountryIso2(CountryISO.JP);
            input.setFirstName(japaneseGivenName);
            input.setLastName(japaneseSurname);
            input.setSource(api_key);
            FirstLastNameGenderedOut result = processGenderGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("genderJapaneseNameBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).",
            requestBody = @RequestBody(
                    description = "A list of names, with country code.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNameIn.class,
                                    example = "{\n"
                                    + "  \"names\": [\n"
                                    + "    {\n"
                                    + "      \"id\": \"123\",\n"
                                    + "      \"firstName\": \"jing\",\n"
                                    + "      \"lastName\": \"cao\",\n"
                                    + "    },\n"
                                    + "    {\n"
                                    + "      \"id\": \"124\",\n"
                                    + "      \"firstName\": \"xiaoming\",\n"
                                    + "      \"lastName\": \"wang\",\n"
                                    + "    }\n"
                                    + "  ]\n"
                                    + "}"
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")

    public BatchFirstLastNameGenderedOut genderJapaneseNamePinyinBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNameGenderedOut[] resultArr = new FirstLastNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (FirstLastNameIn input : body.getPersonalNames()) {
                FirstLastNameGeoIn inputGeo = new FirstLastNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setFirstName(input.getFirstName());
                inputGeo.setLastName(input.getLastName());
                inputGeo.setCountryIso2(CountryISO.JP);
                inputGeo.setSource(api_key);
                FirstLastNameGenderedOut result = processGenderGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNameGenderedOut result = new BatchFirstLastNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderJapaneseNameFull/{japaneseName}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of a Japanese full name ex. 王晓明",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A genderized name.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = PersonalNameGenderedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public PersonalNameGenderedOut genderJapaneseNameFull(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("japaneseName") String japaneseName) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            PersonalNameGeoIn input = new PersonalNameGeoIn();
            input.setCountryIso2(CountryISO.JP);
            input.setName(japaneseName);
            input.setSource(api_key);
            PersonalNameGenderedOut result = processGenderFullGeo(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("genderJapaneseNameFullBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "japanese")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "Infer the likely gender of up to 100 full names",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchPersonalNameIn.class))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchPersonalNameGenderedOut.class)
                        ))
            }
    )

    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchPersonalNameGenderedOut genderJapaneseNameFullBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchPersonalNameIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            PersonalNameGenderedOut[] resultArr = new PersonalNameGenderedOut[body.getPersonalNames().length];
            int i = 0;
            for (PersonalNameIn input : body.getPersonalNames()) {
                PersonalNameGeoIn inputGeo = new PersonalNameGeoIn();
                inputGeo.setId(input.getId());
                inputGeo.setName(input.getName());
                inputGeo.setCountryIso2(CountryISO.JP);
                inputGeo.setSource(api_key);
                PersonalNameGenderedOut result = processGenderFullGeo(inputGeo, true);
                FactInOutLoggerManager.getInstance().appendLog(request, inputGeo, result);
                resultArr[i] = result;
                i++;
            }
            BatchPersonalNameGenderedOut result = new BatchPersonalNameGenderedOut();
            result.setPersonalNames(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("phoneCode/{firstName}/{lastName}/{phoneNumber}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "social")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A name with country and phone code.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNamePhoneCodedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNamePhoneCodedOut phoneCode(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName, final @PathParam("phoneNumber") String phoneNumber) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, true);
        try {
            FirstLastNamePhoneNumberIn input = new FirstLastNamePhoneNumberIn();
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setSource(api_key);
            input.setPhoneNumber(phoneNumber);
            FirstLastNamePhoneCodedOut result = phoneCodeProcess(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }

    }

    @Path("phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "social")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A name with country and phone code.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNamePhoneCodedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FirstLastNamePhoneCodedOut phoneCodeGeo(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName, final @PathParam("phoneNumber") String phoneNumber, final @PathParam("countryIso2") String countryIso2) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            FirstLastNamePhoneNumberGeoIn input = new FirstLastNamePhoneNumberGeoIn();
            input.setFirstName(firstName);
            input.setLastName(lastName);
            input.setCountryIso2(countryIso2);
            input.setSource(api_key);
            input.setPhoneNumber(phoneNumber);
            FirstLastNamePhoneCodedOut result = phoneCodeProcess(input, true);
            FactInOutLoggerManager.getInstance().appendLog(request, input, result);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}")
    @GET
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "social")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A name with country and phone code.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = FirstLastNamePhoneCodedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public FeedbackLoopOut phoneCodeGeoFeedbackLoop(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final @PathParam("firstName") String firstName, final @PathParam("lastName") String lastName, final @PathParam("phoneNumber") String phoneNumber, final @PathParam("phoneNumberE164") String phoneNumberE164, final @PathParam("countryIso2") String countryIso2) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false, false);
        try {
            String id = phoneNumberE164;

            FirstLastNamePhoneNumberGeoIn input1 = new FirstLastNamePhoneNumberGeoIn();
            input1.setId(id);
            input1.setFirstName(firstName);
            input1.setLastName(lastName);
            input1.setCountryIso2(countryIso2);
            input1.setSource(api_key);
            input1.setPhoneNumber(phoneNumber);
            FirstLastNamePhoneCodedOut result1 = phoneCodeProcess(input1, false);
            FactInOutLoggerManager.getInstance().appendLog(request, input1, result1);

            FirstLastNamePhoneNumberGeoIn input2 = new FirstLastNamePhoneNumberGeoIn();
            input2.setId(id);
            input2.setFirstName(firstName);
            input2.setLastName(lastName);
            input2.setCountryIso2(countryIso2);
            input2.setSource(api_key);
            input2.setPhoneNumber(phoneNumberE164);
            FirstLastNamePhoneCodedOut result2 = phoneCodeProcess(input2, false);
            FactInOutLoggerManager.getInstance().appendLog(request, input2, result2);

            // checkAPIKeyEnabled(api_key);
            FeedbackLoopOut result = new FeedbackLoopOut();
            if (api_key.isLearnable()) {
                long credited = APICounterManager.getInstance().creditUsage(input2, 1);
                result.setFeedbackCredits(credited);
            }
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private FirstLastNamePhoneCodedOut phoneCodeProcess(FirstLastNamePhoneNumberIn input, boolean incrementUsage) throws ClassifyException {

        // DON'T assert this fact for now
        // AI.getInstance().assertFact(input);
        FirstLastNameOriginedOut origined = AI.getInstance().predictOrigin(input, incrementUsage);

        input.setOrigin(origined);

        List<String> countryCodesToTry = new ArrayList();
        FirstLastNamePhoneCodedOut result = AI.getInstance().predictPhoneCode(input, incrementUsage);
        String residenceCountryISO2 = null;
        if (input instanceof LocalizedGeoCountry) {
            LocalizedGeoCountry countryIso2 = (LocalizedGeoCountry) input;
            if (countryIso2.getCountryIso2() != null) {
                residenceCountryISO2 = countryIso2.getCountryIso2();
                countryCodesToTry.add(residenceCountryISO2);
            }
        }
        if (result.getPhoneCountryIso2() != null) {
            countryCodesToTry.add(result.getPhoneCountryIso2());
        }
        if (result.getPhoneCountryIso2Alt() != null) {
            countryCodesToTry.add(result.getPhoneCountryIso2Alt());
        }
        if (origined.getCountryOrigin() != null) {
            countryCodesToTry.add(origined.getCountryOrigin());
        }
        if (origined.getCountryOriginAlt() != null) {
            countryCodesToTry.add(origined.getCountryOriginAlt());
        }
        //if (countryCodesToTry.isEmpty()) {
        // in any case, try US code
        countryCodesToTry.add("US");
        //}
        Logger.getLogger(NamSorAPI2.class
                .getName()).fine("phonePrefix predictPhoneCode " + result.getPhoneCountryCode() + " or " + result.getPhoneCountryCodeAlt());
        if (USE_GOOGLE_PHONE //&& result.getPhoneCountryIso2() != null
                ) {
            String phonePrefix = intlPhonePrefix(input.getPhoneNumber());
            PhoneNumber googlePhone = GooglePhoneNumber.parseValidPhoneNumber(input.getPhoneNumber(), countryCodesToTry);
            if (googlePhone != null) {
                String internationalNumber = GooglePhoneNumber.formatInternational(googlePhone);
                String formatNationalNumber = GooglePhoneNumber.formatNational(googlePhone);
                result.setInternationalPhoneNumberVerified(internationalNumber);
                result.setVerified(true);
                String googleCountryCode = PhoneUtil.getInstance().countryCode(googlePhone.getCountryCode());
                result.setPhoneCountryIso2Verified(googleCountryCode);
                if (googleCountryCode != null) { // && googleCountryCode.equals(countryIso2Valid)) {
                    if ((origined.getCountryOrigin() != null && googleCountryCode.equals(origined.getCountryOrigin()) && result.getPhoneCountryIso2() != null && googleCountryCode.equals(result.getPhoneCountryIso2()) && formatNationalNumber != null && formatNationalNumber.equals(input.getPhoneNumber()))
                            || (phonePrefix != null && internationalNumber != null && internationalNumber.startsWith(phonePrefix))) {
                        /**
                         * Only consider reinforcement for Origin could be a
                         * cause for ISSUE Comparison bw/ Origin V1 and Origin
                         * V2 shows a bias towards recognizing FR, DK names.
                         * https://github.com/namsor/namsor-tools-v2/issues/1
                         */
                        {
                            FirstLastNamePhoneNumberCodedIn inputValid = new FirstLastNamePhoneNumberCodedIn();
                            inputValid.setFirstName(input.getFirstName());
                            inputValid.setLastName(input.getLastName());
                            inputValid.setPhoneNumber(internationalNumber);
                            inputValid.setPhoneCountryCode(googlePhone.getCountryCode());
                            inputValid.setOrigin(origined);
                            Logger.getLogger(NamSorAPI2.class.getName()).fine("phonePrefix assertFact intl " + inputValid.key());
                            AI.getInstance().getParsedNamePhoneCodeClassifier().trustedTeachVerifiedNumber(inputValid);
                        }
                        {
                            FirstLastNamePhoneNumberCodedIn inputValid = new FirstLastNamePhoneNumberCodedIn();
                            inputValid.setFirstName(input.getFirstName());
                            inputValid.setLastName(input.getLastName());
                            inputValid.setPhoneNumber(formatNationalNumber);
                            inputValid.setPhoneCountryCode(googlePhone.getCountryCode());
                            inputValid.setOrigin(origined);
                            Logger.getLogger(NamSorAPI2.class.getName()).fine("phonePrefix assertFact nat " + inputValid.key());
                            AI.getInstance().getParsedNamePhoneCodeClassifier().trustedTeachVerifiedNumber(inputValid);
                        }
                        //if( phonePrefix != null && internationalNumber != null && internationalNumber.startsWith(phonePrefix) )
                        {
                            FirstLastNamePhoneNumberCodedIn inputValid = new FirstLastNamePhoneNumberCodedIn();
                            inputValid.setFirstName(input.getFirstName());
                            inputValid.setLastName(input.getLastName());
                            inputValid.setPhoneNumber(input.getPhoneNumber());
                            inputValid.setPhoneCountryCode(googlePhone.getCountryCode());
                            inputValid.setOrigin(origined);
                            Logger.getLogger(NamSorAPI2.class.getName()).fine("phonePrefix assertFact orig " + inputValid.key());
                            AI.getInstance().getParsedNamePhoneCodeClassifier().trustedTeachVerifiedNumber(inputValid);
                        }
                    }
                    //Logger.getLogger(getClass().getName()).warning("NOT(googleCountryCode != null && googleCountryCode.equals(countryIso2Valid))");
                }
            }
        }
        return result;
    }

    @Path("phoneCodeBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "social")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNamePhoneNumberIn.class
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNamePhoneCodedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchFirstLastNamePhoneCodedOut phoneCodeBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNamePhoneNumberIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNamePhoneCodedOut[] resultArr = new FirstLastNamePhoneCodedOut[body.getPersonalNamesWithPhoneNumbers().length];
            int i = 0;
            for (FirstLastNamePhoneNumberIn input : body.getPersonalNamesWithPhoneNumbers()) {
                input.setSource(api_key);
                FirstLastNamePhoneCodedOut result = phoneCodeProcess(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNamePhoneCodedOut result = new BatchFirstLastNamePhoneCodedOut();
            result.setPersonalNamesWithPhoneNumbers(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    @Path("phoneCodeGeoBatch")
    @POST
    @Consumes(APPLICATION_JSON_UTF8)
    @Produces(APPLICATION_JSON_UTF8)
    @Tag(name = "social")
    @SecurityRequirement(name = "api_key")
    @Operation(summary = "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).",
            requestBody = @RequestBody(
                    description = "A list of personal names",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = BatchFirstLastNamePhoneNumberGeoIn.class
                            ))),
            responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "A list of genderized names.",
                        content = @Content(
                                mediaType = "application/json",
                                schema = @Schema(implementation = BatchFirstLastNamePhoneCodedOut.class)
                        ))
            }
    )
    @ApiResponse(responseCode = "401", description = "Missing or incorrect API Key")
    @ApiResponse(responseCode = "403", description = "API Limit Reached or API Key Disabled")
    public BatchFirstLastNamePhoneCodedOut phoneCodeGeoBatch(final @Context HttpServletRequest request, final @Context HttpServletResponse response, final BatchFirstLastNamePhoneNumberGeoIn body) {
        // check API Key 
        APIKeyOut api_key = checkAPIKey(request, false);
        try {
            FirstLastNamePhoneCodedOut[] resultArr = new FirstLastNamePhoneCodedOut[body.getPersonalNamesWithPhoneNumbers().length];
            int i = 0;
            for (FirstLastNamePhoneNumberGeoIn input : body.getPersonalNamesWithPhoneNumbers()) {
                input.setSource(api_key);
                FirstLastNamePhoneCodedOut result = phoneCodeProcess(input, true);
                FactInOutLoggerManager.getInstance().appendLog(request, input, result);
                resultArr[i] = result;
                i++;
            }
            BatchFirstLastNamePhoneCodedOut result = new BatchFirstLastNamePhoneCodedOut();
            result.setPersonalNamesWithPhoneNumbers(resultArr);
            checkAPIKeyEnabled(api_key);
            return result;
        } catch (ClassifyException ex) {
            //Logger.getLogger(NamSorAPI2.class.getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("ClassifyException " + ex.getMessage(), Response.Status.SERVICE_UNAVAILABLE);
        }
    }

    private static final boolean ACCEPT_ANONYMOUS_API_CALLS = true;
    private boolean acceptAnonymousApiCalls = ACCEPT_ANONYMOUS_API_CALLS;

    private APIKeyOut findAPIKey(String api_key) throws PersistenceException {
        if (acceptAnonymousApiCalls && api_key.startsWith(APIKeyOut.ANONYMOUS_PREFIX)) {
            APIKeyOut apiKey = new APIKeyOut();
            apiKey.setApiKey(api_key);
            apiKey.setAdmin(false);
            apiKey.setVetted(false);
            apiKey.setPartner(false);
            apiKey.setCorporate(false);
            apiKey.setDisabled(false);
            return apiKey;
        } else {
            return FirebaseAppServiceAccount.getInstance().readAPIKey(api_key.trim());
        }
    }

    private void checkAPIKeyEnabled(APIKeyOut apiKey) {
        if (apiKey.isDisabled()) {
            throw new RESTException("API Limit Reached or API Key Disabled", Response.Status.FORBIDDEN);
        }
    }

    private static final int MAX_ANONYMOUS_API_REQUESTS_PER_SEC = 10;
    private final static SimpleRateLimiter anonymousAPICallsLimiter = new SimpleRateLimiter("anonymousAPIRequests", MAX_ANONYMOUS_API_REQUESTS_PER_SEC, TimeUnit.SECONDS);

    private APIKeyOut checkAPIKey(final @Context HttpServletRequest request, boolean admin) {
        return checkAPIKey(request, admin, false);
    }

    private APIKeyOut checkAPIKey(final @Context HttpServletRequest request, boolean admin, boolean anonymous) {
        try {
            //String remoteIPAddr = request.getRemoteAddr();
            String api_key = request.getHeader(NAMSOR_APIKEY);
            if (api_key == null || api_key.isEmpty()) {
                throw new RESTException("Missing header " + NAMSOR_APIKEY, Response.Status.UNAUTHORIZED);
            }
            if (ACCEPT_ANONYMOUS_API_CALLS && api_key.startsWith(APIKeyOut.ANONYMOUS_PREFIX)) {
                if (!anonymous) {
                    throw new RESTException("Anonymous access", Response.Status.UNAUTHORIZED);
                }
                APIKeyOut apiKey = new APIKeyOut();
                apiKey.setApiKey(api_key);
                apiKey.setAdmin(false);
                apiKey.setVetted(false);
                apiKey.setLearnable(false);
                apiKey.setPartner(false);
                apiKey.setCorporate(false);
                apiKey.setDisabled(false);
                boolean acquired = anonymousAPICallsLimiter.tryAcquire();
                if (acquired) {
                    return apiKey;
                } else {
                    throw new RESTException("Too many anonymous requests", Response.Status.TOO_MANY_REQUESTS);
                }
            }
            APIKeyOut apiKey = FirebaseAppServiceAccount.getInstance().readAPIKey(api_key.trim());
            if (apiKey == null || apiKey.getApiKey() == null) {
                throw new RESTException("Unknown " + NAMSOR_APIKEY + " " + api_key, Response.Status.UNAUTHORIZED);
            }
            if (admin & !apiKey.isAdmin()) {
                throw new RESTException("Admin access", Response.Status.UNAUTHORIZED);
            }
            String anonymizer = request.getHeader(NAMSOR_ANONYMIZER);
            if (anonymizer != null && !anonymizer.isEmpty()
                    && (apiKey.isLearnable() || apiKey.isAnonymized())) {
                // no logging, ie. API Key should not be learnable
                throw new RESTException("Requesting with " + NAMSOR_ANONYMIZER + " : please ask NamSor admin to set your API Key to learnable=false, anonymized=true", Response.Status.TOO_MANY_REQUESTS);
            }
            return apiKey;
        } catch (PersistenceException ex) {
            Logger.getLogger(NamSorAPI2.class
                    .getName()).log(Level.SEVERE, null, ex);
            throw new RESTException("PersistenceException " + ex.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    private String verifyCountryIso2(String countryIso2) {
        if (countryIso2 == null) {
            return null;
        } else {
            String result = countryIso2.trim().toUpperCase();
            if (result.length() != 2) {
                throw new RESTException("Invalid countryIso2 " + countryIso2 + " length!=2 " + result + " valid : ex. US, CA, FR, etc. ", Response.Status.BAD_REQUEST);
            }
            if (result.equals("UK")) {
                result = "GB";
            }
            return result;
        }
    }

}
