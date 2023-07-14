import { Dispatch, SetStateAction } from "react";
import { filterVerseOptions } from "./verse-filter";
import ComboBox, { KeyValueItem } from "@components/shared/combobox";
import { ValidBookName } from "kingjames";

type Props = {
  selectedBook: ValidBookName;
  selectedChapter: number;
  selectedVerse: KeyValueItem;
  setSelectedVerse: Dispatch<SetStateAction<KeyValueItem>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

/**
 * A React Chapter ComboBox component used to select biblical chapters.
 *
 * @param param0 The props for the ChapterSelect component.
 * @returns A component that allows the user to select a biblical chapter.
 *
 */
export default function VerseSelect({
  selectedBook,
  selectedChapter,
  selectedVerse,
  setSelectedVerse,
  query,
  setQuery,
}: Props) {
  return (
    <div>
      <ComboBox
        selectedValue={selectedVerse}
        onChange={setSelectedVerse}
        query={query}
        setQuery={setQuery}
        items={filterVerseOptions(
          selectedBook.toLowerCase() as ValidBookName,
          selectedChapter,
          query
        ).map((b) => b)}
        inputMode="numeric"
      />
    </div>
  );
}
