export interface Followers {
  title:            string;
  media_list_data:  any[];
  string_list_data: StringListDatum[];
}

interface StringListDatum {
  href:      string;
  value:     string;
  timestamp: number;
}
