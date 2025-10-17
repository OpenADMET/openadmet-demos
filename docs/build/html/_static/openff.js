/*******************************************************************************
 * MutationObserver to move the ReadTheDocs button
 *
 * Code taken from pydata-sphinx-theme
 * https://github.com/pydata/pydata-sphinx-theme/blob/185a37aa36820f77bffa4c87a772092e9e7cc380/src/pydata_sphinx_theme/assets/scripts/pydata-sphinx-theme.js#L505-L534
 *
 * BSD 3-Clause License
 *
 * Copyright (c) 2018, pandas
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

/* define function to replace jQuery methods
 * inspired by https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
 */

/**
 * Execute a method if DOM has finished loading
 *
 * @param {function} callback the method to execute
 */
function documentReady(callback) {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

/**
 * intercept the RTD flyout and place it in the rtd-footer-container if existing
 * if not it stays where on top of the page
 */
function initRTDObserver() {
  const mutatedCallback = (mutationList, observer) => {
    mutationList.forEach((mutation) => {
      // Check whether the mutation is for RTD, which will have a specific structure
      if (mutation.addedNodes.length === 0) {
        return;
      }
      if (mutation.addedNodes[0].data === undefined) {
        return;
      }
      if (mutation.addedNodes[0].data.search("Inserted RTD Footer") != -1) {
        mutation.addedNodes.forEach((node) => {
          document.getElementById("rtd-versions-container-header").append(node.cloneNode(true));
          document.getElementById("rtd-versions-container-burger").append(node);
        });
      }
    });
  };

  const observer = new MutationObserver(mutatedCallback);
  const config = { childList: true };
  observer.observe(document.body, config);
}


// Run when document is ready
documentReady(initRTDObserver);