/**
 * [https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifckernel/lexical/ifcproduct.htm]
 */

import { getItemByType } from "../../ifc-utils/ifc-constructors";
import { IfcObject } from "./IfcObject";

class IfcProduct extends IfcObject {
  getIfcProperties() {
    super.getIfcProperties();
    this.objectPlacement = getItemByType(this, this.extractId());
    this.representation = this.extractId();
  }
}

export { IfcProduct };