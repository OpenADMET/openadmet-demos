<div style="text-align: left">
<img src="oADMET-color-tagline.png" alt="OpenADMET" width="500"/>  
</div>

---
# OpenADMET Demos

The OpenADMET Demos are a hands-on way to explore the OpenADMET ecosystem in action. Each demo is designed to highlight key capabilities, from  data curation, basic featurization and model training to more advanced workflows such as deep learning and active learning for ADMET prediction.

These examples are intended to be:

* Practical – showing real use cases on chemical datasets.

* Educational – helping you understand the building blocks of the OpenADMET ecosystem.

* Interactive – many are designed to run in Google Colab so you can experiment directly in your browser.

Whether you’re just getting started or looking for inspiration for your own projects, the demos will walk you through how to combine datasets, featurizers, models, and evaluation tools into end-to-end workflows.



## Who are these demos for ? 


> Are you a researcher trying to generate a pool of compounds to test against your disease target?

> Are you an R&D lab scientist looking to fine tune an ADMET model with your assay data?

> Are you an ML scientist looking to compare the latest machine learning models?

> Are you a student looking to build your very first ADMET model?

These demos are for you! 


Currently the main focus is of the demos is the [OpenADMET Models package](https://github.com/OpenADMET/openadmet-models) that houses our production grade workflows. Some additional utilities and tools come from the [OpenADMET Toolkit package](https://github.com/OpenADMET/openadmet-toolkit).




# Getting Started
1. Clone this repository, then change to the appropriate directory:

```bash
git clone git@github.com:OpenADMET/openadmet-demos.git
cd openadmet-demos/conda-envs/
```

2. Create a `conda` environment containing the requirements from that directory

```bash
conda env create -n openadmet -f openadmet_demos.yaml
```

3. Activate the environment

```bash
conda activate openadmet-demos
```


You can then work through the demos.

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
Now that you've curated and filtered a dataset, learn how to use Anvil to train an ADMET model! `Anvil` is our primary infrastructure for model training and evaluation, built to support scalable, reproducible, and rigorous development of ADMET prediction models. Anvil centers around a `yaml`-based recipe system to ensure reproducibility and robustness of model training.

### 3.1. Comparing models
Now that you've trained several different models, you can compare their performances across several different metrics to evaluate which model works best for your use case. You can even generate a final comparative report for easy readability.

### 3.2 Model Inference
Use the best performing model after evaluation to predict on a dataset unseen by the model for your practical application, e.g. predict the pEC50 against PXR of a set of lead candidates.


### Showcase 

The showcase notebook brings everything together into a complete, end-to-end workflow. It demonstrates how to:

* Ingest and curate datasets from internal or external sources.

* Apply featurization to transform chemical matter into model-ready representations.

* Train multiple models using Anvil with reproducible YAML-based recipes.

* Evaluate performance across standard metrics and generate comparative reports.

* Run inference on new compounds to support decision-making in real research contexts.

This notebook is a practical guide to building a full ADMET modeling pipeline with OpenADMET—ideal if you want to see the ecosystem in action or adapt the workflow for your own projects.


# Next steps 

Ready to go further?

* Join the community – Ask questions, share feedback, and discuss workflows with other users on our [GitHub Discussions](https://github.com/orgs/OpenADMET/discussions).
* Contribute – Found a bug, have a feature request, or built a new workflow? Open an issue or pull requestand help grow the ecosystem.
* Stay updated – Keep an eye on our repositories for new demos, model architectures, and tools as they’re released. Updates will appear on our [website](https://openadmet.org/)