/* ================================================================
   PUBLICATIONS AND SUBMITTED PAPERS
   This file holds the lists shown on the website. index.html reads
   it automatically, so this is the only file you need to edit.
   ================================================================

   ADD A NEW PUBLICATION
   1. Copy the template below (everything from { to },).
   2. Paste it right after the line  window.PUBLICATIONS = [
   3. Fill in the details and remove any optional lines you don't need.

  {
    title: "Paper title",
    authors: "First Last, First Last, First Last",
    venue: "Journal or conference name",
    year: 2026,
    type: "conference",
    featured: false,
    link: "",
    volume: "",
    number: "",
    pages: "",
    publisher: "",
  },

   FIELDS
   title     : paper title, inside quotes
   authors   : names as "First Last", separated by commas
   venue     : journal or conference name
   year      : a number, without quotes (e.g. 2026)
   type      : "journal", "conference", "preprint" or "thesis"
   featured  : true shows the paper under "Selected", otherwise false
   link      : web address of the paper, or "" if none
   Optional  : volume, number, pages, publisher, school (for a thesis)

   NOTES
   - BibTeX is created automatically from these details.
   - Order does not matter: papers are sorted by year on the page.
   - Keep the quotes around text and the comma after each line and
     after each closing }.
   - If the website says "The publication list could not be loaded",
     look for a missing comma, quote or bracket in your last change.
   ================================================================ */

window.PUBLICATIONS = [
  {
    title: "Multi-Feature Fusion Approach for Generative AI Images Detection",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "arXiv preprint arXiv:2603.29788",
    year: 2026,
    type: "preprint",
    featured: true,
    link: "https://arxiv.org/abs/2603.29788",
  },
  {
    title: "When Restoration Becomes The Reference: Reusing Full-Reference IQA in Blind Settings",
    authors: "Aymen Sekhri, Abderrezzaq Sendjasni, Seyed Ali Amirshahi, Mohamed-Chaker Larabi",
    venue: "2026 IEEE International Conference on Image Processing (ICIP)",
    year: 2026,
    type: "conference",
    featured: true,
    link: "",
    pages: "1--6",
    publisher: "IEEE",
  },
  {
    title: "Embedding similarity guided license plate super resolution",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "Neurocomputing",
    year: 2025,
    type: "journal",
    featured: true,
    link: "https://www.sciencedirect.com/science/article/pii/S0925231225013293",
    volume: "651",
    pages: "130657",
    publisher: "Elsevier",
  },
  {
    title: "Embedding-Driven Data Distillation for 360-Degree IQA With Residual-Aware Refinement",
    authors: "Abderrezzaq Sendjasni, Seif-Eddine Benkabou, Mohamed-Chaker Larabi",
    venue: "arXiv preprint arXiv:2412.12667",
    year: 2024,
    type: "preprint",
    featured: true,
    link: "https://arxiv.org/abs/2412.12667",
  },
  {
    title: "PW-360IQA: Perceptually-weighted multichannel CNN for blind 360-degree image quality assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "Sensors",
    year: 2023,
    type: "journal",
    featured: true,
    link: "https://www.mdpi.com/1424-8220/23/9/4242",
    volume: "23",
    number: "9",
    pages: "4242",
    publisher: "MDPI",
  },
  {
    title: "Attention-aware patch-based CNN for blind 360-degree image quality assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "Sensors",
    year: 2023,
    type: "journal",
    featured: false,
    link: "https://www.mdpi.com/1424-8220/23/21/8676",
    volume: "23",
    number: "21",
    pages: "8676",
    publisher: "MDPI",
  },
  {
    title: "Convolutional neural networks for omnidirectional image quality assessment: A benchmark",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: 2022,
    type: "journal",
    featured: true,
    link: "https://ieeexplore.ieee.org/abstract/document/9791414?casa_token=ZAaazrnflKAAAAAA:ZdwgP9eWMZObyDhgz7hTwkaGuJwomBZdOv0qb1NFDrkRWABxjW_hErpufkivHW_xEavQfs1pozE",
    volume: "32",
    number: "11",
    pages: "7301--7316",
    publisher: "IEEE",
  },
  {
    title: "Objective and subjective quality assessment of 360-degree images",
    authors: "Abderrezzaq Sendjasni",
    venue: "PhD Thesis",
    year: 2023,
    type: "thesis",
    featured: true,
    link: "",
    school: "Université de Poitiers; Université norvégienne des sciences et de la technologie (NTNU)",
  },
  {
    title: "Optimizing Frame Selection for Improved Video Quality Assessment Through Embedding Similarity",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Seif-Eddine Benkabou",
    venue: "2025 Electronic Imaging Symposium – Image Quality and System Performance",
    year: 2025,
    type: "conference",
    featured: true,
    link: "",
    volume: "37",
    number: "9",
    pages: "251",
    publisher: "Society for Imaging Science and Technology",
  },
  {
    title: "Apport des Descripteurs Visuels à la Détection d’Images Générées par IA",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "XXXe Colloque Francophone de Traitement du Signal et des Images",
    year: 2025,
    type: "conference",
    featured: false,
    link: "",
  },
  {
    title: "IA et Police, le travail policier à l'ère du numérique et de l'IA",
    authors: "Hugo Lami, Yoann Nabat, Mathieu Zagrodski, Noémie Levain, Fanny Pagès, Abderrezzaq Sendjasni",
    venue: "IA et Police, le travail policier à l'ère du numérique et de l'IA",
    year: 2025,
    type: "conference",
    featured: false,
    link: "",
  },
  {
    title: "Local Structure Matters: A Graph-Based Approach to Point Cloud Perceptual Quality Assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2025 17th International Conference on Quality of Multimedia Experience (QoMEX)",
    year: 2025,
    type: "conference",
    featured: false,
    link: "",
    pages: "1--7",
    publisher: "IEEE",
  },
  {
    title: "Latent Space Stability vs. Perceptual Sensitivity: A Study of Visual Encoders under Distortion",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2025 IEEE International Workshop on Multimedia Signal Processing (MMSP)",
    year: 2025,
    type: "conference",
    featured: false,
    link: "",
    pages: "334--339",
    publisher: "IEEE",
  },
  {
    title: "Enhancing Perceptual Quality Assessment for 360-Degree Images Based on Adaptive Patch Labeling and Multi-Label Learning",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2024 IEEE International Conference on Image Processing (ICIP)",
    year: 2024,
    type: "conference",
    featured: true,
    link: "",
    pages: "1267--1273",
    publisher: "IEEE",
  },
  {
    title: "Embedding similarity learning for extreme license plate super-resolution",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2024 IEEE 26th International Workshop on Multimedia Signal Processing (MMSP)",
    year: 2024,
    type: "conference",
    featured: false,
    link: "",
    pages: "1--6",
    publisher: "IEEE",
  },
  {
    title: "Self patch labeling using quality distribution estimation for CNN-based 360-IQA training",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2023 IEEE International Conference on Image Processing (ICIP)",
    year: 2023,
    type: "conference",
    featured: false,
    link: "",
    pages: "2640--2644",
    publisher: "IEEE",
  },
  {
    title: "Adaptive patch labeling and multi-label feature selection for 360-degree image quality assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Seif-Eddine Benkabou",
    venue: "2023 IEEE 25th International Workshop on Multimedia Signal Processing (MMSP)",
    year: 2023,
    type: "conference",
    featured: false,
    link: "",
    pages: "1--6",
    publisher: "IEEE",
  },
  {
    title: "SAL-360IQA: A saliency weighted patch-based cnn model for 360-degree images quality assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2022 IEEE International Conference on Multimedia and Expo Workshops (ICMEW)",
    year: 2022,
    type: "conference",
    featured: false,
    link: "",
    pages: "1--6",
    publisher: "IEEE",
  },
  {
    title: "Investigating normalization methods for CNN-based image quality assessment",
    authors: "Abderrezzaq Sendjasni, David Traparic, Mohamed-Chaker Larabi",
    venue: "2022 IEEE International Conference on Image Processing (ICIP)",
    year: 2022,
    type: "conference",
    featured: false,
    link: "",
    pages: "4113--4117",
    publisher: "IEEE",
  },
  {
    title: "Transfer Learning from Vision Transformers or ConvNets for 360-Degree Images Quality Assessment?",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    venue: "2022 IEEE International Conference on Image Processing (ICIP)",
    year: 2022,
    type: "conference",
    featured: false,
    link: "",
    pages: "4133--4137",
    publisher: "IEEE",
  },
  {
    title: "Exploration de l’impact de la normalisation sur la performance de l’évaluation de la qualité basée sur des réseaux de neurones convolutionnels",
    authors: "Abderrezzaq Sendjasni, David Traparic, Mohamed-Chaker Larabi",
    venue: "XXVIIIème Colloque Francophone de Traitement du Signal et des Images",
    year: 2022,
    type: "conference",
    featured: false,
    link: "",
  },
  {
    title: "Patch-based CNN model for 360 image quality assessment with adaptive pooling strategies",
    authors: "Abderrezzaq Sendjasni, Mohamed Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "Image Quality and System Performance XIX",
    year: 2021,
    type: "conference",
    featured: false,
    link: "",
    volume: "34",
    number: "9",
    pages: "395--1",
  },
  {
    title: "Convolutional Neural Networks for Omnidirectional Image Quality Assessment: Pre-Trained or Re-Trained?",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "2021 IEEE International Conference on Image Processing (ICIP)",
    year: 2021,
    type: "conference",
    featured: false,
    link: "",
    pages: "3413--3417",
    publisher: "IEEE",
  },
  {
    title: "Perceptually-weighted CNN for 360-degree image quality assessment using visual scan-path and JND",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "2021 IEEE International Conference on Image Processing (ICIP)",
    year: 2021,
    type: "conference",
    featured: false,
    link: "",
    pages: "1439--1443",
    publisher: "IEEE",
  },
  {
    title: "Visual Scan-Path based Data-Augmentation for CNN-based 360-degree Image Quality Assessment",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "London Imaging Meeting",
    year: 2021,
    type: "conference",
    featured: false,
    link: "",
    volume: "2021",
    number: "1",
    pages: "21--26",
    publisher: "Society for Imaging Science and Technology",
  },
  {
    title: "On the influence of head-mounted displays on quality rating of omnidirectional images",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "Electronic Imaging",
    year: 2021,
    type: "conference",
    featured: false,
    link: "",
    volume: "33",
    publisher: "Society for Imaging Science and Technology",
  },
  {
    title: "On the improvement of 2D quality assessment metrics for omnidirectional images",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi, Faouzi Alaya Cheikh",
    venue: "Electronic Imaging",
    year: 2020,
    type: "conference",
    featured: false,
    link: "",
    volume: "32",
    pages: "1--11",
    publisher: "Society for Imaging Science and Technology",
  }
];


/* ================================================================
   SUBMITTED PAPERS (under review)

   TEMPLATE
  {
    title: "Paper title",
    authors: "First Last, First Last",
    kind: "journal",
    venue: "Journal or conference name",
    date: "Sep 2026",
  },

   kind : "journal" or "conference"
   To hide the section, leave the list empty:  window.SUBMITTED = [];
   When a paper is accepted, delete it here and add it to
   PUBLICATIONS above.
   ================================================================ */

window.SUBMITTED = [
  {
    title: "Cross-Representation Learning for Deepfake Video Detection",
    authors: "Abderrezzaq Sendjasni, Mohamed-Chaker Larabi",
    kind: "journal",
    venue: "IEEE Open Journal of Signal Processing",
    date: "Sep 2026",
  },
  {
    title: "Cross-View Graph Attention for No-Reference Point Cloud Quality Assessment",
    authors: "Ahmed Ibrahim, Abderrezzaq Sendjasni, Giuseppe Valenzise, Mohamed-Chaker Larabi",
    kind: "conference",
    venue: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)",
    date: "Sep 2026",
  },
];