      // // List all possible INPUT keys
      // if (!apiExamplesGen[routes[i]]) {
      //   apiExamplesGen[routes[i]] = {};

      //   if (!apiExamplesGen[routes[i]].input) {
      //     let inputTarget = apiExamplesGen[routes[i]].input = {};

      //     if (routeRequests[routes[i]]) {
      //       Object.keys(routeRequests[routes[i]].schema).forEach(field => {
      //         let targetField = routeRequests[routes[i]].schema[field];

      //         if (targetField.type) {
      //           inputTarget[field] = targetField.type;
      //         }
      //         else {
      //           inputTarget[field] = {};
      //           Object.keys(targetField).forEach(subfield => {
      //             if (targetField[subfield].type) {
      //               inputTarget[field][subfield] = targetField[subfield].type;
      //             }
      //             else {
      //               console.log('subfield 1: ', subfield);
      //             };
      //           });
      //         };
      //       });
      //     };
      //   };
      // };

      // // List all possible OUTPUT keys
      // if (!apiExamplesGen[routes[i]].output) {
      //   let outputTarget = apiExamplesGen[routes[i]].output = {};

      //   if (routeResponses[routes[i]]) {
      //     Object.keys(routeResponses[routes[i]].schema).forEach(field => {
      //       let targetField = routeResponses[routes[i]].schema[field];

      //       if (targetField.type) {
      //         outputTarget[field] = targetField.type;
      //       }
      //       else {
      //         outputTarget[field] = {};
      //         Object.keys(targetField).forEach(subfield => {
      //           if (targetField[subfield].type) {
      //             outputTarget[field][subfield] = targetField[subfield].type;
      //           }
      //           else {
      //             console.log('subfield 2: ', subfield);
      //           };
      //         });
      //       };
      //     });
      //   };
      // };

      // console.log('routes[i]: ', routes[i]);
      // // Get example values
      // if(routeResponses[routes[i]])
      // let testFetch = fetch(`https://v2.namsor.com/NamSorAPIv2${}`, {
      //   method: 'get',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-API-KEY': 'b214894824e1c4762fb650866fea8f3c'
      //   },
      // })
      //   .then(res => res.json());