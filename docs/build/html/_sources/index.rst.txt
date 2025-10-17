.. OpenADMET Demos documentation master file, created by
   sphinx-quickstart on Fri Oct 17 12:00:13 2025.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

OpenADMET Demos
=============================

The OpenADMET Demos are a hands-on way to explore the OpenADMET ecosystem in action. The overall arc of the demos follows a typical situation in computational modelling for ADMET. Curating data for an ADMET endpoint of interest, training and comparing a series of machine learning models and then inferring on an unseen set of molecules. Each demo is designed to highlight key capabilities, from data curation, basic featurization and model training to more advanced workflows such as deep learning and active learning for ADMET prediction.

These examples are intended to be:

    Practical – showing real use cases on chemical datasets.

    Educational – helping you understand the building blocks of the OpenADMET ecosystem.

    Interactive – Jupyter notebooks (some of which run nicely in Google Colab) give you a hands on introduction

Whether you’re just getting started or looking for inspiration for your own projects, the demos will walk you through how to combine datasets, featurizers, models, and evaluation tools into end-to-end workflows.


.. toctree::
   :maxdepth: 2
   :caption: Tutorials

   demos/01_Data_Curation/01_Curate_ChEMBL_Data
   demos/02_Model_Training/02_Training_Models
   demos/03_Model_Comparison/03_Comparing_Models
   demos/04_Ensemble_Model_Training/04_Ensemble_Model_Training_Active_Learning
   demos/05_Ensemble_Model_Inference/05_Model_Ensemble_Inference
