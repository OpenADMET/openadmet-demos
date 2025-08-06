<div style="text-align: left">
<img src="oADMET-color-tagline.png" alt="Anvil diagram" width="500"/>  
</div>

---
# OpenADMET Demos

Welcome to the OpenADMET package! This toolkit provides an open-source framework for evaluating **A**bsorption, **D**istribution, **M**etabolism, **E**xcretion, and **T**oxicity (ADMET) qualities of small molecule drug candidates against common protein anti-targets for clinical viability.

> Are you a clinical researcher trying to generate a pool of compounds to test against your disease target?

> Are you an R&D lab scientist looking to fine tune an ADMET model with your assay data?

> Are you an ML scientist looking to compare the latest cheminformatics models?

> OR, are you a student looking to build your very first ADMET model?

Then, this is the toolkit for you!

In this repo, we will walk you through the main functionality of this package:
1. How to curate a dataset for model training.
2. How to filter that datasets for specific compounds of interest.
3. How to train a model with our workflow, Anvil, to predict compound activity.
4. How to compare model performances.
5. How to do model inference.

---
# Getting Started
1. Clone this repository, then change to the appropriate directory:

```powershell
git clone git@github.com:OpenADMET/openadmet-demos.git
cd openadmet-demos/conda-envs/
```

2. Create a `conda` environment containing the requirements from that directory

```powershell
conda env create -n openadmet -f openadmet_toolkit.yaml
```

3. Activate the environment

```powershell
conda activate openadmet
```

4. Change to the root directory where `pyproject.toml` is and create the editable installation:

```powershell
python -m pip install -e .
```

5. Now, clone the repository for `openadmet-models` . Then change to the appropriate directory:

```powershell
git clone git@github.com:OpenADMET/openadmet-models.git
cd openadmet-models/devtools/conda-envs/
```

1. Update the conda environment `openadmet` with the `openadmet-models` ’s yaml.

```powershell
conda env update -n openadmet -f openadmet_models.yaml
```

1. Repeat step 6 with `openadmet_models_gpu.yaml` to install the CLI tools as well.
2. Change to the root directory where `pyproject.toml` is and create the editable installation:

```powershell
python -m pip install .
```

1. Check that `openadmet-toolkit` and `openadmet-models` have been installed with:

```powershell
conda list
```

