export default function Precautions({ styles }) {
  return (
    <>
      <h2>Precautions during handling and storage</h2>
      <div className={styles.precautions}>
        <p>
          Store products in a cool, dry, well-ventilated area away from direct
          heat and sunlight. Keep containers tightly closed and properly
          labelled; avoid exposure to moisture which can cause caking. Use
          first-in, first-out stock rotation to maintain quality and inspect
          incoming shipments for damaged packaging.
        </p>

        <p>
          When handling powders, minimize dust generation: use local
          exhaust/ventilation, gentle transfer methods and closed systems where
          practical. Wear appropriate PPE — at minimum a dust mask or respirator
          (as specified in the SDS), safety goggles, and gloves — and follow
          your facility’s respiratory protection program.
        </p>

        <p>
          For spills, avoid dry sweeping. Use vacuum systems fitted with HEPA
          filtration or gently collect with dampened absorbent material, then
          place in labelled containers for disposal according to local
          regulations. Prevent material entering drains or waterways.
        </p>

        <p>
          Maintain good housekeeping, provide training on safe handling and
          emergency procedures, and ensure access to the product Safety Data
          Sheet (SDS) for detailed hazard, first-aid and fire-fighting
          instructions. For any uncertainty, consult the SDS and your company
          EHS team.
        </p>
      </div>
    </>
  );
}
