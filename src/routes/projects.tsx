import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toniGuyInteriorOneAsset from "@/assets/toni-guy-andheri-interior-1.jpg.asset.json";
import toniGuyInteriorTwoAsset from "@/assets/toni-guy-andheri-interior-2.jpg.asset.json";
import toniGuyExteriorAsset from "@/assets/toni-guy-andheri-exterior.jpg.asset.json";
import anilBhaiLivingOneAsset from "@/assets/anil-bhai-santacruz-living-1.jpg.asset.json";
import anilBhaiTvUnitAsset from "@/assets/anil-bhai-santacruz-tv-unit.jpg.asset.json";
import anilBhaiLivingTwoAsset from "@/assets/anil-bhai-santacruz-living-2.jpg.asset.json";
import anilBhaiBedroomAsset from "@/assets/anil-bhai-santacruz-bedroom.jpg.asset.json";
import kamalJainWa0023 from "@/assets/kamal-jain-worli-0413-wa0023.jpg.asset.json";
import kamalJainWa0026 from "@/assets/kamal-jain-worli-0413-wa0026.jpg.asset.json";
import kamalJainWa0027 from "@/assets/kamal-jain-worli-0413-wa0027.jpg.asset.json";
import kamalJainWa0033 from "@/assets/kamal-jain-worli-0413-wa0033.jpg.asset.json";
import kamalJainWa0036 from "@/assets/kamal-jain-worli-0413-wa0036.jpg.asset.json";
import kamalJainWa0047 from "@/assets/kamal-jain-worli-0716-wa0047.jpg.asset.json";
import kamalJainWa0049 from "@/assets/kamal-jain-worli-0716-wa0049.jpg.asset.json";
import kamalJainWa0053 from "@/assets/kamal-jain-worli-0716-wa0053.jpg.asset.json";
import playSchoolHall from "@/assets/play-group-school-pune-hall.jpg.asset.json";
import playSchoolActivity from "@/assets/play-group-school-pune-activity.jpg.asset.json";
import playSchoolWallart from "@/assets/play-group-school-pune-wallart.jpg.asset.json";
import playSchoolClassroom from "@/assets/play-group-school-pune-classroom.jpg.asset.json";
import playSchoolSeating from "@/assets/play-group-school-pune-seating.jpg.asset.json";
import playSchoolCorridor from "@/assets/play-group-school-pune-corridor.jpg.asset.json";
import tietoSignage from "@/assets/tieto-pune-signage.jpg.asset.json";
import tietoTrainingRoom from "@/assets/tieto-pune-training-room.jpg.asset.json";
import tietoGlassCabin from "@/assets/tieto-pune-glass-cabin.jpg.asset.json";
import tietoWorkstationsOne from "@/assets/tieto-pune-workstations-1.jpg.asset.json";
import tietoWorkstationsTwo from "@/assets/tieto-pune-workstations-2.jpg.asset.json";
import tietoWorkstationsThree from "@/assets/tieto-pune-workstations-3.jpg.asset.json";
import iqbalKitchen from "@/assets/iqbal-bhai-jogeshwari-kitchen.jpg.asset.json";
import iqbalBedroomOne from "@/assets/iqbal-bhai-jogeshwari-bedroom-1.jpg.asset.json";
import iqbalBedroomTwo from "@/assets/iqbal-bhai-jogeshwari-bedroom-2.jpg.asset.json";
import iqbalWardrobe from "@/assets/iqbal-bhai-jogeshwari-wardrobe.jpg.asset.json";
import iqbalBathroomVanity from "@/assets/iqbal-bhai-jogeshwari-bathroom-vanity.jpg.asset.json";
import iqbalBedroomThree from "@/assets/iqbal-bhai-jogeshwari-bedroom-3.jpg.asset.json";
import iqbalBedroomFour from "@/assets/iqbal-bhai-jogeshwari-bedroom-4.jpg.asset.json";
import iqbalBedroomFive from "@/assets/iqbal-bhai-jogeshwari-bedroom-5.jpg.asset.json";
import iqbalBedsideUnit from "@/assets/iqbal-bhai-jogeshwari-bedside-unit.jpg.asset.json";
import iqbalBathroom from "@/assets/iqbal-bhai-jogeshwari-bathroom.jpg.asset.json";
import ayanKitchenOne from "@/assets/ayan-chaterjee-dahisar-kitchen-1.jpg.asset.json";
import ayanKitchenTwo from "@/assets/ayan-chaterjee-dahisar-kitchen-2.jpg.asset.json";
import ayanBedroomOne from "@/assets/ayan-chaterjee-dahisar-bedroom-1.jpg.asset.json";
import ayanBedroomTwo from "@/assets/ayan-chaterjee-dahisar-bedroom-2.jpg.asset.json";
import ayanBedroomThree from "@/assets/ayan-chaterjee-dahisar-bedroom-3.jpg.asset.json";
import ayanWardrobeColumn from "@/assets/ayan-chaterjee-dahisar-wardrobe-column.jpg.asset.json";
import ayanTvWall from "@/assets/ayan-chaterjee-dahisar-tv-wall.jpg.asset.json";
import ayanBedroomFour from "@/assets/ayan-chaterjee-dahisar-bedroom-4.jpg.asset.json";
import ayanWardrobes from "@/assets/ayan-chaterjee-dahisar-wardrobes.jpg.asset.json";
import ayanBedroomFive from "@/assets/ayan-chaterjee-dahisar-bedroom-5.jpg.asset.json";
import ayanTwoLivingOne from "@/assets/ayan-chaterjee-dahisar-2-living-1.jpg.asset.json";
import ayanTwoLivingTwo from "@/assets/ayan-chaterjee-dahisar-2-living-2.jpg.asset.json";
import ayanTwoTvUnit from "@/assets/ayan-chaterjee-dahisar-2-tv-unit.jpg.asset.json";
import ayanTwoDresser from "@/assets/ayan-chaterjee-dahisar-2-dresser.jpg.asset.json";
import ayanTwoShelf from "@/assets/ayan-chaterjee-dahisar-2-shelf.jpg.asset.json";
import ayanTwoEntry from "@/assets/ayan-chaterjee-dahisar-2-entry.jpg.asset.json";
import sagarKitchenOne from "@/assets/sagar-bhai-mira-bhayander-kitchen-1.jpg.asset.json";
import sagarKitchenTwo from "@/assets/sagar-bhai-mira-bhayander-kitchen-2.jpg.asset.json";
import sagarSitting from "@/assets/sagar-bhai-mira-bhayander-sitting.jpg.asset.json";
import sagarEntryOne from "@/assets/sagar-bhai-mira-bhayander-entry-1.jpg.asset.json";
import sagarEntryTwo from "@/assets/sagar-bhai-mira-bhayander-entry-2.jpg.asset.json";
import sagarDining from "@/assets/sagar-bhai-mira-bhayander-dining.jpg.asset.json";
import sagarMirrorWall from "@/assets/sagar-bhai-mira-bhayander-mirror-wall.jpg.asset.json";
import sagarTvUnit from "@/assets/sagar-bhai-mira-bhayander-tv-unit.jpg.asset.json";
import sagarLivingOne from "@/assets/sagar-bhai-mira-bhayander-living-1.jpg.asset.json";
import sagarLivingTwo from "@/assets/sagar-bhai-mira-bhayander-living-2.jpg.asset.json";
import sagarFoyerMarble from "@/assets/sagar-bhai-mira-bhayander-foyer-marble.jpg.asset.json";
import sagarLivingTv from "@/assets/sagar-bhai-mira-bhayander-living-tv.jpg.asset.json";
import sagarWardrobeBrown from "@/assets/sagar-bhai-mira-bhayander-wardrobe-brown.jpg.asset.json";
import sagarBedMural from "@/assets/sagar-bhai-mira-bhayander-bed-mural.jpg.asset.json";
import sagarBedCurtains from "@/assets/sagar-bhai-mira-bhayander-bed-curtains.jpg.asset.json";
import sagarBedOrange from "@/assets/sagar-bhai-mira-bhayander-bed-orange.jpg.asset.json";
import sagarWardrobesGreen from "@/assets/sagar-bhai-mira-bhayander-wardrobes-green.jpg.asset.json";
import sagarWardrobeGreen from "@/assets/sagar-bhai-mira-bhayander-wardrobe-green.jpg.asset.json";
import axxelaConferenceRoom from "@/assets/axxela-andheri-conference-room.jpg.asset.json";
import axxelaWorkstationsOne from "@/assets/axxela-andheri-workstations-1.jpg.asset.json";
import axxelaStorageUnit from "@/assets/axxela-andheri-storage-unit.jpg.asset.json";
import axxelaTrainingRoom from "@/assets/axxela-andheri-training-room.jpg.asset.json";
import axxelaTradingDesk from "@/assets/axxela-andheri-trading-desk.jpg.asset.json";
import axxelaYellowCorridor from "@/assets/axxela-andheri-yellow-corridor.jpg.asset.json";
import axxelaFeatureWall from "@/assets/axxela-andheri-feature-wall.jpg.asset.json";
import axxelaPaintWork from "@/assets/axxela-andheri-paint-work.jpg.asset.json";
import axxelaBathroom from "@/assets/axxela-andheri-bathroom.jpg.asset.json";
import axxelaReception from "@/assets/axxela-andheri-reception.jpg.asset.json";
import axxelaTwoWorkstationsTwo from "@/assets/axxela-andheri-2-workstations-2.jpg.asset.json";
import axxelaTwoUrinals from "@/assets/axxela-andheri-2-urinals.jpg.asset.json";
import axxelaTwoTriangleWall from "@/assets/axxela-andheri-2-triangle-wall.jpg.asset.json";
import axxelaTwoMeetingRoom from "@/assets/axxela-andheri-2-meeting-room.jpg.asset.json";
import mehulKitchenOne from "@/assets/mehul-thakkar-powai-kitchen-1.jpg.asset.json";
import mehulDiningDisplay from "@/assets/mehul-thakkar-powai-dining-display.jpg.asset.json";
import mehulBedroomTv from "@/assets/mehul-thakkar-powai-bedroom-tv.jpg.asset.json";
import mehulBedroomHeadboard from "@/assets/mehul-thakkar-powai-bedroom-headboard.jpg.asset.json";
import mehulBedroomHorseArt from "@/assets/mehul-thakkar-powai-bedroom-horse-art.jpg.asset.json";
import mehulKitchenTwo from "@/assets/mehul-thakkar-powai-kitchen-2.jpg.asset.json";
import mehulDiningYellowArt from "@/assets/mehul-thakkar-powai-dining-yellow-art.jpg.asset.json";
import mehulBedroomGoldArt from "@/assets/mehul-thakkar-powai-bedroom-gold-art.jpg.asset.json";
import mehulDiningGlass from "@/assets/mehul-thakkar-powai-dining-glass.jpg.asset.json";
import mehulLivingSwing from "@/assets/mehul-thakkar-powai-living-swing.jpg.asset.json";
import mehulKitchenThree from "@/assets/mehul-thakkar-powai-kitchen-3.jpg.asset.json";
import mehulEntryGanesha from "@/assets/mehul-thakkar-powai-entry-ganesha.jpg.asset.json";
import mehulLivingTwo from "@/assets/mehul-thakkar-powai-living-2.jpg.asset.json";
import mehulSwingBalcony from "@/assets/mehul-thakkar-powai-swing-balcony.jpg.asset.json";
import mehulKitchenGlassDoor from "@/assets/mehul-thakkar-powai-kitchen-glass-door.jpg.asset.json";




export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Infinite Space Interiors" },
      { name: "description", content: "A selected gallery of residential, commercial and retail interiors." },
      { property: "og:title", content: "Projects Gallery — Infinite Space" },
      { property: "og:description", content: "Selected work from our studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const all = [
  { img: mehulKitchenOne.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulDiningDisplay.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulBedroomTv.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulBedroomHeadboard.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulBedroomHorseArt.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulKitchenTwo.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulDiningYellowArt.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulBedroomGoldArt.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: mehulDiningGlass.url, t: "Mehul Thakkar — Powai", c: "Residential Interiors", loc: "Powai" },
  { img: axxelaTwoTriangleWall.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaTwoMeetingRoom.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaTwoWorkstationsTwo.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaTwoUrinals.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaReception.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaWorkstationsOne.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaFeatureWall.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaTradingDesk.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaConferenceRoom.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaTrainingRoom.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaYellowCorridor.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaPaintWork.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaStorageUnit.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: axxelaBathroom.url, t: "Axxela — Andheri", c: "Office Interiors", loc: "Andheri" },
  { img: sagarFoyerMarble.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarLivingTv.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarWardrobeBrown.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarBedMural.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarBedCurtains.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarBedOrange.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarWardrobesGreen.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarWardrobeGreen.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarLivingOne.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarLivingTwo.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarTvUnit.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarMirrorWall.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarDining.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarEntryTwo.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarEntryOne.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarSitting.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarKitchenTwo.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: sagarKitchenOne.url, t: "Sagar Bhai — Mira Bhayander", c: "Residential Interiors", loc: "Mira Bhayander" },
  { img: ayanTwoLivingOne.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTwoLivingTwo.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTwoTvUnit.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTwoDresser.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTwoShelf.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTwoEntry.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanKitchenOne.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },

  { img: ayanKitchenTwo.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanBedroomOne.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanBedroomTwo.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanBedroomThree.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanWardrobeColumn.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanTvWall.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanBedroomFour.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanWardrobes.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: ayanBedroomFive.url, t: "Ayan Chaterjee — Dahisar", c: "Residential Interiors", loc: "Dahisar" },
  { img: iqbalKitchen.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedroomOne.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedroomTwo.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalWardrobe.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBathroomVanity.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedroomThree.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedroomFour.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedroomFive.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBedsideUnit.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: iqbalBathroom.url, t: "Iqbal Bhai — Jogeshwari", c: "Residential Interiors", loc: "Jogeshwari" },
  { img: tietoSignage.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: tietoTrainingRoom.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: tietoGlassCabin.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: tietoWorkstationsOne.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: tietoWorkstationsTwo.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: tietoWorkstationsThree.url, t: "Tieto — Pune", c: "Office Interiors", loc: "Pune" },
  { img: playSchoolHall.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: playSchoolActivity.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: playSchoolWallart.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: playSchoolClassroom.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: playSchoolSeating.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: playSchoolCorridor.url, t: "Play Group School — Pune", c: "Turnkey Interiors", loc: "Pune" },
  { img: kamalJainWa0033.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0036.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0023.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0026.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0027.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0047.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0049.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0053.url, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: anilBhaiLivingOneAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiTvUnitAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiLivingTwoAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiBedroomAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: toniGuyExteriorAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
  { img: toniGuyInteriorOneAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
  { img: toniGuyInteriorTwoAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
];
const filters = ["All", "Residential Interiors", "Luxury Bungalows", "Hospitality Projects", "Office Interiors", "Retail Spaces", "Turnkey Interiors", "Modular Furniture", "Furniture Work"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? all : all.filter((p) => p.c === filter);

  return (
    <div>
       <section className="bg-sage-soft pt-32 pb-12 lg:pt-40 section-wave section-wave-light">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-sage-deep">Projects Gallery</p>
             <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl max-w-5xl text-balance">
               Spaces we've brought to life.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-2">
               {filters.map((f) => (
                 <Button
                  key={f}
                  onClick={() => setFilter(f)}
                    variant="outline"
                    aria-pressed={filter === f}
                    className={`px-5 py-2 rounded-sm text-xs font-bold uppercase border transition-colors ${
                    filter === f
                       ? "bg-sage-deep text-primary-foreground border-sage-deep hover:bg-sage"
                       : "bg-card border-border text-muted-foreground hover:border-sage-deep hover:text-sage-deep"
                  }`}
                >
                  {f}
                 </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

       <section className="pt-12 pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <Reveal key={p.t + i} delay={i * 50}>
              <div className="group">
                <div className="overflow-hidden rounded-sm hover-zoom">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                   <h3 className="font-bold uppercase text-lg">{p.t}</h3>
                   {p.loc && <p className="text-xs tracking-widest uppercase text-muted-foreground">{p.loc}</p>}
                </div>
                <p className="text-sm text-sage-deep mt-1">{p.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
