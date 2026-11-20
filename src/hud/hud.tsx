/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useAccessorValue } from "../arcgis/hooks/useAccessorValue";
import { Suspense, useEffect, useState } from "react";

import './hud-styles.css';
import { Toolbar } from "./toolbar/toolbar";
import { useEditor } from "../editor/editor";
import { SketchfabImport } from "../sketch-fab/sketch-fab-importer";

export function HUD() {
  const editor = useEditor();
  const isEditing = useAccessorValue(() => editor.isActive);

  const [identityDialog, setIdentityDialog] = useState(false)
  const [observer] = useState(() => new MutationObserver(() => {
    const authPopup = document.body.querySelector(".esri-identity-modal")
    setIdentityDialog(authPopup != null);
  }));

  useEffect(() => {
    observer.observe(document.body, { childList: true })
  })

  const [selectedToolkit, setSelectedToolkit] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-1 pointer-events-none">
      <SketchfabImport isActive={selectedToolkit === 'gltf' && !isEditing} />
      <Suspense>
        <Toolbar
          identityDialog={identityDialog}
          selectedToolkit={selectedToolkit}
          toggleToolkit={(toolkit) => setSelectedToolkit(selectedToolkit => selectedToolkit === toolkit ? null : toolkit)}
        />
      </Suspense>
    </div>
  );
}
