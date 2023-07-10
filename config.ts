
import {ConfigModel} from "origamicore";  
import ManagerConfig from "./services/manager/models/managerConfig";
export default new ConfigModel({
    packageConfig:[
         new ManagerConfig({})
    ]
});