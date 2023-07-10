import { ModuleConfig, PackageIndex } from "origamicore";
import ManagerService from "..";
export default class ManagerConfig extends ModuleConfig
{
    async createInstance(): Promise<PackageIndex> {
        var instance=new ManagerService();
        await instance.jsonConfig(this);
        return instance;
    }
    dbContext:string;
    public constructor(
        
        fields?: {
            id?:string
            name?: string, 
            dbContext?:string  
        }) {

        super(fields);
        if (fields) Object.assign(this, fields);
    }
}