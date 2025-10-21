#!/bin/bash

#SBATCH --partition=gpu
#SBATCH --time=48:00:00
#SBATCH --mem=64G
#SBATCH --ntasks-per-node=1
#SBATCH --job-name=chemprop
#SBATCH --gres=gpu:1

# Source bashrc
source ${HOME}/.bashrc

# Activate environment
conda activate openadmet_demos

# Launch script
openadmet anvil --recipe-path anvil_ensemble_chemprop.yaml --output-dir ensemble_chemprop