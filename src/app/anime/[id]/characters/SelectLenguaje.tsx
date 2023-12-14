import { useState, useEffect } from "react";
import { CharacterPreviewEdge } from "@/types/types";
import { Select, SelectItem } from "@nextui-org/react";

type Props = {
  characters: CharacterPreviewEdge[];
  setLanguage: Function;
};

export const SelectLenguaje = ({ characters, setLanguage }: Props) => {
  const [allLanguages, setAllLanguages] = useState<string[]>([]);

  useEffect(() => {
    // Crear un nuevo array con todos los lenguajes
    const languages = characters.reduce((result, character) => {
      character.voiceActorRoles.forEach((role) => {
        const language = role.voiceActor.language;
        //@ts-ignore
        if (!result.includes(language)) {
          //@ts-ignore
          result.push(language);
        }
      });
      return result;
    }, []);

    setAllLanguages(languages);
  }, []);

  const handelVoiceActorChange = (language: string) => {
    setLanguage(language);
  };
  console.log(allLanguages);
  return (
    <>
      {allLanguages && (
        <div className="py-3  w-full flex  justify-end items-center ">
          <div className="flex w-[200px] flex-wrap md:flex-nowrap gap-4">
            <Select
              label="Idiomas"
              className="max-w-xs"
              selectionMode="single"
              variant="flat"
              color="secondary"
              size="sm"
              defaultSelectedKeys={["Japanese"]}
              
              onChange={(e) => handelVoiceActorChange(e.target.value)}
            >
              {allLanguages.map((language) => (
                <SelectItem key={language} value={language} color="secondary">
                  {language}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      )}
    </>
  );
};
