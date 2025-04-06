const core = require('@actions/core');
const { spawn } = require("child_process");

function run(cmd) {
  const subprocess = spawn(cmd, { stdio: "inherit", shell: true });
  subprocess.on("exit", (exitCode) => {
    process.exitCode = exitCode;
  });
}

try {
  const action_dir = process.env.GITHUB_ACTION_PATH;

  const gcpZone = core.getInput('gcp-zone');
  const gcpProject = core.getInput('gcp-project');
  const gcpInstanceName = core.getInput('gcp-instance-name');

  run(`${action_dir}/stop/stop_js/stop.sh ${gcpZone} ${gcpProject} ${gcpInstanceName}`);

} catch (error) {
  core.setFailed(error.message);
}



