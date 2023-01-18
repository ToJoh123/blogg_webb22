import React from 'react'
import Picture from '../img/Selection_EXPORT_TABLE.png'
import Picture2 from '../img/Selection_IMPORT_TABLE.png'
import Picture3 from '../img/Selection_EDIT_NAME.png'
function WorkbenchExportTable() {
  return (
    <section>
      <article>
        <h2>Clone an existing table using workbench gui</h2>
        <ol>
          <li>Export the table you want to copy using export wizard</li>
          <li>Select the columns you want press next </li>
          <li>Select your export file path</li>
          <li>Next..</li>
          <img src={Picture} alt="view from error" width="400px" />
          <li>Import the table you want to copy using import wizard</li>
          <li>Select the file you want to import</li>
          <li>Press next until complete</li>
          <img src={Picture2} alt="view from error" width="400px" />
          <li>Change the name of the table in this field</li>
          <img src={Picture3} alt="view from error" width="400px" />
          <li>Press next until complete</li>
        </ol>
      </article>
      <h3>fin</h3>
    </section>
  )
}

export default WorkbenchExportTable