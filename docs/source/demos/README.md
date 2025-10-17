# Table of Contents


## 1. Curating CYP3A4 data from ChEMBL
Learn how to retrieve relevant CYP3A4 inhibition data from public repositories and perform the essential data cleaning and transformation steps. This ensures your dataset is in a format suitable for modeling.

## 2. Training CYP3A4 models with Anvil
With your curated dataset, this notebook demonstrates how to train ADMET models using Anvil, OpenADMET’s infrastructure for scalable, reproducible, and robust model development. Anvil relies on a yaml-based recipe system to standardize and simplify model training workflows.

## 3. Comparing our models
After training multiple models, evaluate and compare their performance using a variety of metrics. This notebook also shows how to generate a comparative report for clear, easy-to-interpret results as well as how to BYO models to compare

## 4. Training a CYP3A4 inhibition model ensemble
Use the best performing model from our comparison to train a model ensemble. Model ensembles can provide uncerinty estimates for their predictions, allowing you to estimate confidence and contextualise your results.

## 5. Running model ensemble inference
Apply the trained ensemble to make predictions on a previously unseen dataset, such as a set of mid-stage molecules, to assess their CYP3A4 liability. This notebook also introduces active learning strategies to prioritize compounds for experimental testing, helping you focus resources on the most informative or promising molecules.