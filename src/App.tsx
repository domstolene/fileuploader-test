import { useState } from "react";
import "./App.css";
import { FileUploader } from "@norges-domstoler/dds-components";

function App() {
  const [filelist, setFilelist] = useState<Array<File> | undefined>(undefined);

  return (
    <div>
      <FileUploader
        accept={["application/pdf"]}
        value={filelist}
        onChange={(newFilelist) => setFilelist(newFilelist)}
      />
    </div>
  );
}

export default App;
