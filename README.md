# OpenMRS 3.x IPS ESM

A frontend module for downloading and viewing International Patient Summaries (IPS) in O3.

The IPS can be viewed in the patient chart when you navigate to the Patient summary page.

## Getting Started for developers

```sh
# Clone the repository
git clone git@github.com:openmrs/openmrs-esm-ips.git

# to install dependencies
yarn

# to run the dev server
yarn start

# OR to start on a specified port eg 5000
yarn start --port 5000
```

Once it is running, a browser window should open with O3 running. Log in and then navigate to the patient chart under the Patient Summary.

## Running tests

```sh
yarn run test
```

# Dependencies
This esm depends on this backend module [See [here](https://github.com/I-TECH-UW/openmrs-module-ips)]
