# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "OpenADMET Models"
copyright = (
    "2025, OpenADMET Contributors. Project structure based on the "
    "Computational Molecular Science Python Cookiecutter version 1.10"
)
author = "OpenADMET Contributors"

# The short X.Y version
version = ""
# The full version, including alpha/beta/rc tags
release = ""

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'nbsphinx',
    'sphinx.ext.mathjax',
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    "openff_sphinx_theme",
]

# The master toctree document.
master_doc = "index"

templates_path = ['_templates']
exclude_patterns = ['_build', '**.ipynb_checkpoints', '.DS_Store']


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "openff_sphinx_theme"
html_static_path = ['_static']

# (Optional) favicon.
# If not provided, will default to the generic OpenADMET logo
html_favicon = "_static/favicon-32x32.png"

# Theme options are theme-specific and customize the look and feel of a
# theme further.
html_theme_options = {
    # Repository integration  # the base url for the docs
    # Set the repo url for the link to appear
    "repo_url": "https://github.com/OpenADMET/openadmet-demos",
    # The name of the repo. If must be set if repo_url is set
    "repo_name": "openadmet-demos",
    # Must be one of github, gitlab or bitbucket
    "repo_type": "github",
    # Colour for sidebar captions and other accents. One of
    # openff-blue, openff-toolkit-blue, openff-dataset-yellow,
    # openff-evaluator-orange, aquamarine, lilac, amaranth, grape,
    # violet, pink, pale-green, green, crimson, eggplant, turquoise,
    # or a tuple of three ints in the range [0, 255] corresponding to
    # a position in RGB space.
    "color_accent": (232, 59, 59),
    # Content Minification for deployment
    "html_minify": True,
    "css_minify": True,
    "socials": [
        {
            "href": "https://github.com/openadmet",
            "title": "OpenADMET on GitHub",
            "icon_classes": "fab fa-github",
        },
    ],
}

html_css_files = ["custom.css"]