// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(dataset) {
  // [START automl_v1beta1_generated_AutoMl_UpdateDataset_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The dataset which replaces the resource on the server.
   */
  // const dataset = {}
  /**
   *  The update mask applies to the resource.
   */
  // const updateMask = {}

  // Imports the Automl library
  const {AutoMlClient} = require('@google-cloud/automl').v1beta1;

  // Instantiates a client
  const automlClient = new AutoMlClient();

  async function callUpdateDataset() {
    // Construct request
    const request = {
      dataset,
    };

    // Run request
    const response = await automlClient.updateDataset(request);
    console.log(response);
  }

  callUpdateDataset();
  // [END automl_v1beta1_generated_AutoMl_UpdateDataset_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
