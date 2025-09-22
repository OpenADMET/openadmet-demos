#!/bin/bash

#SBATCH --partition=gpu
#SBATCH --time=48:00:00
#SBATCH --mem=64G
#SBATCH --ntasks-per-node=1
#SBATCH --job-name=anvil
#SBATCH --gres=gpu:1
#SBATCH --array=0-1

# Source bashrc
source ${HOME}/.bashrc

# Activate environment
conda activate openadmet_demos

# Arguments
RECIPE_PATHS=("anvil_chemprop.yaml", "anvil_multitask.yaml")
OUTPUT_DIRS=("chemprop", "multitask")

RECIPE=${RECIPE_PATHS[$SLURM_ARRAY_TASK_ID]}
OUTDIR=${OUTPUT_DIRS[$SLURM_ARRAY_TASK_ID]}

# Launch script
openadmet anvil --recipe-path "$RECIPE" --output-dir "$OUTDIR"