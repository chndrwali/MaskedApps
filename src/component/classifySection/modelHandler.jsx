import * as tf from '@tensorflow/tfjs';

async function loadModel() {
  const model = tf.loadGraphModel(
    '/model/json/model.json',
  );

  // Cek model
  try {
    await model;
  } catch (error) {
    throw new Error('Model tidak ditemukan');
  }

  return model;
}

function imageClasses() {
  const classes = {
    0: 'Salah Memakai Masker',
    1: 'Memakai Masker',
    2: 'Tidak Memakai Masker',
  };

  return classes;
}

async function classifyModel(image, setResults, setIsLoading) {
  setIsLoading(true);
  const model = await loadModel();
  const IMAGE_CLASSES = imageClasses();

  const tensorImg = tf.browser
    .fromPixels(image)
    .resizeNearestNeighbor([150, 150])
    .toFloat()
    .expandDims();

  const prediction = await model.predict(tensorImg).data();
  const results = Array.from(prediction).map((probablity, index) => ({
    probability: probablity,
    className: IMAGE_CLASSES[index],
  }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 3);

  setResults(results);
  setIsLoading(false);
}

export default classifyModel;