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

import * as FA from '@fortawesome/free-solid-svg-icons'
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import WaterSymbol3DLayer from "@arcgis/core/symbols/WaterSymbol3DLayer.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import Symbol from "@arcgis/core/symbols/Symbol";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D.js";

export type ToolkitConfig = {
  id: string;
  name: string;
  elevationMode: NonNullable<GraphicsLayer["elevationInfo"]>["mode"];
  closeWhenActive: boolean,
  icon: FA.IconDefinition,
  tools?: EditorToolConfig[],
  drawingMode: 'single' | 'continuous';
}

export const Toolkits: ToolkitConfig[] = [
  {
    id: "trees",
    name: 'Trees',
    elevationMode: 'relative-to-scene',
    closeWhenActive: true,
    icon: FA.faTree,
    drawingMode: 'continuous'
  },
  {
    id: 'gltf',
    name: 'glTF',
    icon: FA.faCloudDownloadAlt,
    elevationMode: 'relative-to-scene',
    closeWhenActive: true,
    drawingMode: 'single'
  }
]

export type EditorToolConfig = {
  id: string;
  label: string;
  symbol: Symbol;
  thumbnail?: string;
  createOperation?: (sketch: SketchViewModel) => void;
}