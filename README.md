<div style="text-align: left">
<img src="./static/oADMET-color-tagline.png" alt="OpenADMET" width="500"/>  
</div>

---
# OpenADMET Demos

The OpenADMET Demos are a hands-on way to explore the OpenADMET ecosystem in action. The overall arc of the demos follows a typical situation in computational modeling for ADMET. Curating data for an ADMET endpoint of interest, training and comparing a series of machine learning models, and then inferring on an unseen set of molecules. Each demo is designed to highlight key capabilities, from data curation, basic featurization, and model training, to more advanced workflows such as deep learning and active learning for ADMET prediction.

These examples are intended to be:

* **Practical** – showing real use cases on chemical datasets.

* **Educational** – helping you understand the building blocks of the OpenADMET ecosystem.

* **Interactive** – Jupyter notebooks (some of which run nicely in Google Colab) give you a hands on introduction

Whether you’re just getting started or looking for inspiration for your own projects, the demos will walk you through how to combine datasets, featurizers, models, and evaluation tools into end-to-end workflows.



## Who are these demos for ? 


> Are you an ML scientist looking to compare the latest machine learning models?

> Are you an R&D lab scientist looking to fine tune an ADMET model with your assay data?

> Are you a student looking to build your very first ADMET model?

> Want to understand how we approach ML at OpenADMET

These demos are for you! 


Currently the main focus is of the demos is the [OpenADMET Models package](https://github.com/OpenADMET/openadmet-models) that houses our production grade workflows. Some additional utilities and tools come from the [OpenADMET Toolkit package](https://github.com/OpenADMET/openadmet-toolkit).




# Tutorials

We are going to work through a typical situation in ADMET modeling where we wish to construct a model for an ADMET endpoint of choice and apply it on a series of molecules. 

For these tutorials, we will focus on **Cytochrome P450 (CYP450) inhibition** as our case study, particularly CYP3A4, the most pharmaceutically relevant isoform and the most abundant in the liver. CYP3A4 is responsible for metabolizing roughly 50% of marketed drugs and plays a central role in drug–drug interactions (DDIs). Inhibition of CYP3A4 can lead to elevated plasma levels of co-administered drugs, potentially causing toxicity or therapeutic failure, making it a critical ADMET endpoint in early-stage drug discovery.

## What is CYP3A4 inhibition and how is it measured?

CYP3A4 inhibition occurs when a compound reduces the activity of the CYP3A4 enzyme, slowing or blocking the metabolism of its substrates. This can happen through:

* Reversible inhibition: The inhibitor temporarily binds to the enzyme, and normal activity resumes when it dissociates.
* irreversible inhibition: The inhibitor permanently inactivates the enzyme, requiring biosynthesis of new CYP3A4 to restore activity.

CYP3A4 inhibition is commonly measured in vitro using enzyme assays with a probe substrate. The most widely used metric is the $IC_{50}$ or half maximal inhibitory concentration: the concentration of an inhibitor needed to reduce enzyme activity by 50%. Lower $IC_{50}$ values indicate stronger inhibition.

## Items 

In `demos/` are a series of demo notebooks that demonstrate key steps to build and deploy a CYP3A4 inhibition model using OpenADMET tooling. We will focus here on building models from data available on public repositories such as [ChEMBL](https://www.ebi.ac.uk/chembl/) and applying best practices in ADMET model development.

### 1. Curating CYP3A4 data from ChEMBL
Learn how to retrieve relevant CYP3A4 inhibition data from public repositories and perform the essential data cleaning and transformation steps. This ensures your dataset is in a format suitable for modeling.

### 2. Training CYP3A4 models with Anvil
With your curated dataset, this notebook demonstrates how to train ADMET models using Anvil, OpenADMET’s infrastructure for scalable, reproducible, and robust model development. Anvil relies on a yaml-based recipe system to standardize and simplify model training workflows.

### 3. Comparing our models
After training multiple models, evaluate and compare their performance using a variety of metrics. This notebook also shows how to generate a comparative report for clear, easy-to-interpret results as well as how to BYO models to compare

### 4. Training a CYP3A4 inhibition model ensemble
Use the best performing model from our comparison to train a model ensemble. Model ensembles can provide uncerinty estimates for their predictions, allowing you to estimate confidence and contextualise your results.

### 5. Running model ensemble inference
Apply the trained ensemble to make predictions on a previously unseen dataset, such as a set of mid-stage molecules, to assess their CYP3A4 liability. This notebook also introduces active learning strategies to prioritize compounds for experimental testing, helping you focus resources on the most informative or promising molecules.

### Showcase 

In `showcase/` the OpenADMET showcase notebook brings everything together into a complete, compact, end-to-end workflow. It demonstrates how to:

* Ingest and curate datasets from internal or external sources.

* Apply featurization to transform chemical matter into model-ready representations.

* Train multiple models using Anvil with reproducible YAML-based recipes.

* Evaluate performance across standard metrics and generate comparative reports.

* Run inference on new compounds to support decision-making in real research contexts.

This notebook is a practical guide to building a full ADMET modeling pipeline with OpenADMET and is ideal if you want to see the ecosystem in action or adapt the workflow for your own projects.


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


You can then work through the `demos` and `showcase`.

# Next steps 

Ready to go further?

* Join the community – Ask questions, share feedback, and discuss workflows with other users on our [GitHub Discussions](https://github.com/orgs/OpenADMET/discussions).
* Contribute – Found a bug, have a feature request, or built a new workflow? Open an issue or pull requestand help grow the ecosystem.
* Stay updated – Keep an eye on our repositories for new demos, model architectures, and tools as they’re released. Updates will appear on our [website](https://openadmet.org/)
