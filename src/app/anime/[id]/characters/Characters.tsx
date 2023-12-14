"use client";
import { CharacterPreviewEdge, VoiceActorRole } from "@/types/types";
import { useEffect, useState } from "react";
import { SelectLenguaje } from "./SelectLenguaje";

export const Characters = ({
  characters,
}: {
  characters: CharacterPreviewEdge[];
}) => {
  const [language, setLanguage] = useState("Japanese");
  const [voiceActor, setVoiceActor] = useState<VoiceActorRole[]>(
    characters
      .flatMap((edge) => edge.voiceActorRoles)
      .filter((actor) => actor.voiceActor.language === language)
  );

  useEffect(() => {
    const filteredVoiceActor = characters
      .flatMap((edge) => edge.voiceActorRoles)
      .filter((actor) => actor.voiceActor.language === language);
    setVoiceActor(filteredVoiceActor);
  }, [characters, language]);

  return (
    <div className="w-full relative h-full">
      <SelectLenguaje setLanguage={setLanguage} characters={characters} />
      <div className="grid_characters">
        {characters?.map((character, index) => {
          return (
            <div
              className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]"
              key={character.id}
            >
              <div className="flex justify-center items-center">
                <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
                  <img
                    src={character.node.image.large}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-end w-full  flex-col h-full min-h-full px-3  ">
                  <p className="text-start w-full text-sm">
                    {character.node.name?.userPreferred}
                  </p>
                  {voiceActor[index]?.voiceActor?.name?.userPreferred && (
                    <p className="text-end w-full text-sm">
                      {voiceActor[index]?.voiceActor?.name?.userPreferred}
                    </p>
                  )}
                  {voiceActor[index]?.voiceActor?.language && (
                    <p className="text-end w-full text-sm">
                      {voiceActor[index]?.voiceActor?.language}
                    </p>
                  )}
                </div>
                <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
                  <img
                    src={
                      voiceActor[index]?.voiceActor?.image.large
                        ? voiceActor[index]?.voiceActor?.image.large
                        : "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg"
                    }
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// import { VoiceActorClass } from '@/types/types';
// import React, { useState } from 'react';

// const VoiceActorList = ({ voiceActors } : {voiceActors : VoiceActorClass[]}) => {
//   const [selectedLanguage, setSelectedLanguage] = useState('All'); // Inicialmente, todos los actores se mostrarán

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   const filteredVoiceActors = selectedLanguage === 'All'
//     ? voiceActors
//     : voiceActors.filter(actor => actor.voiceActorRoles.some(role => role.voiceActor.language === selectedLanguage));

//   return (
//     <div>
//       <label htmlFor="languageSelect">Selecciona un idioma:</label>
//       <select id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
//         <option value="All">Todos</option>
//         <option value="Japanese">Japonés</option>
//         <option value="English">Inglés</option>
//         <option value="Spanish">Español</option>
//         <option value="French">Francés</option>
//         <option value="German">Alemán</option>
//         <option value="Italian">Italiano</option>
//       </select>

//       <ul>
//         {filteredVoiceActors.map(actor => (
//           <li key={actor.id}>
//             <img src={actor.node.image.large} alt={actor.node.name.userPreferred} />
//             <p>{actor.node.name.userPreferred}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VoiceActorList;
