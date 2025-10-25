# Creating an installer for OpenADMETForge

This document describes how to create an installer for OpenADMETForge using `constructor` and GitHub Actions.

## Installer Configuration
The installer configuration is defined in the `construct.yaml` file located in the `devtools/installer` directory. Key configurations include:
- **Name**: The name of the installer is set to `OpenADMETForge`.
- **Version**: The version is dynamically set using an environment variable.
- **Company**: The company name is set to `OpenADMET`.
- **License File**: The license file is specified to ensure compliance with licensing terms.
- **Environment File**: The environment file is specified to define the conda environment for the installer.

## GitHub Actions Workflow
The GitHub Actions workflow for building the installer is defined in the `.github/workflows/make_installer.yaml` file. Key steps in the workflow include:
- **Set up Python**: Setting up the Python environment for the build process.
- **Install Constructor**: Installing the `constructor` package.
- **Build Installer**: Running the `constructor` command to build the installer.
- **Determine File Name**: Dynamically determining the name of the generated installer file.
- **Upload Installer**: Uploading the generated installer as an artifact and to the GitHub release. 


After the workflow runs, the installer can be found in the GitHub Actions artifacts. You then need to **attach the installer to a GitHub release manually**. There should be two, one for MacOS and one for Linux.