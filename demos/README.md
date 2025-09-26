# Table of Contents

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