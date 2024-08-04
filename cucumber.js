module.exports = {
    default: `--require-module ts-node/register --require tests/step_definitions/**/*.ts --require tests/support/*.ts --format progress --format json:./test-results/cucumber-report.json`,
  };