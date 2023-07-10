import { DataInput, ModuleConfig, OriInjectable, OriService, PackageIndex, SessionInput } from "origamicore";
import ManagerConfig from "./models/managerConfig";
import UserModel from './models/userModel';

@OriInjectable({domain:'manager'})
export default class ManagerService implements PackageIndex
{
    name:string='manager';
    config:ManagerConfig;
    jsonConfig(moduleConfig: ModuleConfig): Promise<void> { 
        this.config=moduleConfig as ManagerConfig;
        return ;
    }
    start(): Promise<void> {
        return;
    }
    restart(): Promise<void> {
        return;
    }
    stop(): Promise<void> {
        return;
    }
    
    @OriService({isPublic:true})
    test(@SessionInput session,@DataInput({classType:UserModel})user:UserModel)
    {

    }
}