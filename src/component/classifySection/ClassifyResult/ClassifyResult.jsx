import React, { useRef, useEffect, useContext } from 'react'; // Import React, useRef, useEffect, dan useContext jika belum diimpor
import { AppContext } from '../../../context/app-context';
import GeneralResult from './GeneralResult';
import DetailResult from './DetailResult';

function ClassifyResult() {
  const context = useContext(AppContext);
  const { results, image } = context;

  let trashTypes;
  switch (results[0].className) {
    case 'Orang':
    case 'Orang tua':
    case 'Muda':
      trashTypes = 'Orang';
      break;

    default:
      trashTypes = 'Orang';
      break;
  }

  const garbageTypeRef = useRef(null);
  const garbageCategoryRef = useRef(null);
  const garbageProbabilityRef = useRef(null);
  const garbageImageClassifiedRef = useRef(null);

  useEffect(() => {
    garbageTypeRef.current.innerText = `${results[0].className}`;
    garbageCategoryRef.current.innerText = trashTypes;
    garbageProbabilityRef.current.innerText = `${(results[0].probability * 100).toFixed(2)}%`;

    garbageImageClassifiedRef.current.src = image;
  }, [image, results, trashTypes]);

  return (
    <div className="w-full border border-black/75 rounded-lg lg:w-[calc(50%-2rem)]">
      <div className="border-b border-black/75 p-3 text-center">
        <h3 className="text-xl text-black/75 font-semibold lg:text-2xl">
          Hasil Klasifikasi
        </h3>
      </div>
      <GeneralResult
        garbageTypeRef={garbageTypeRef}
        garbageCategoryRef={garbageCategoryRef}
        garbageProbabilityRef={garbageProbabilityRef}
        garbageImageClassifiedRef={garbageImageClassifiedRef}
      />
      <DetailResult
        results={results}
      />
    </div>
  );
}

export default ClassifyResult;
