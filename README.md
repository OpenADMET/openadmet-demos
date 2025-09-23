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


# Getting Started
1. Clone this repository, then change to the appropriate directory:

```powershell
git clone git@github.com:OpenADMET/openadmet-demos.git
cd openadmet-demos/conda-envs/
```

2. Create a `conda` environment containing the requirements from that directory

```powershell
conda env create -n openadmet -f openadmet_demos.yaml
```

3. Activate the environment

```powershell
conda activate openadmet
```

# Tutorials
Within `/demos` are a series of demo notebooks that demonstrate key processes of the OpenADMET package. They are ordered in a typical machine learning workflow.

1. Data Curation  
&nbsp;&nbsp;&nbsp;&nbsp;1.1. Curating external datasets  

2. Modeling  
&nbsp;&nbsp;&nbsp;&nbsp;2.1. Training models with Anvil  

3. Evaluation  
&nbsp;&nbsp;&nbsp;&nbsp;3.1 Comparing models  
&nbsp;&nbsp;&nbsp;&nbsp;3.2 Model inference  
---

### 1.1. Curating external datasets
In addition to the provided datasets, you can also plugin datasets from external sources, e.g. your own data or from public data sources. This notebook will walk you through necessary bare minimum data transformation and cleaning that your external data has to undergo to be amenable to modeling.

### 2.1 Training models with Anvil
Now that you've curated and filtered a dataset, learn how to use Anvil to train an ADMET model! Anvil is our primary infrastructure for model training and evaluation, built to support scalable, reproducible, and rigorous development of ADMET prediction models. Anvil centers around a `yaml`-based recipe system to ensure reproducibility and robustness of model training.

### 3.1. Comparing models
Now that you've trained several different models, you can compare their performances across several different metrics to evaluate which model works best for your use case. You can even generate a final comparative report for easy readability.

### 3.2 Model Inference
Use the best performing model after evaluation to predict on a dataset unseen by the model for your practical application, e.g. predict the pEC50 against PXR of a set of lead candidates.
