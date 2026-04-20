#!/bin/bash

#SBATCH --partition=gpu
#SBATCH --time=48:00:00
#SBATCH --mem=64G
#SBATCH --ntasks-per-node=1
#SBATCH --job-name=chemeleon_mt_all
#SBATCH --gres=gpu:1
#SBATCH --array=0-383%10
#SBATCH --output=train_%A_%a.out
#SBATCH --error=train_%A_%a.err

# Source bashrc
source ${HOME}/.bashrc

# Activate environment (prefix-based env — not in the named registry)
conda activate /home/xuc2/openadmet_models

# Launch script
openadmet anvil --recipe-path anvil_recipe.yaml --output-dir chemeleon_exprx_chembl