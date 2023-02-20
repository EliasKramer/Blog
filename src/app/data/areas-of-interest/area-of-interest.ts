import { Project } from "./project";

export class AreaOfInterest{
    public title: string;
    public description: string;
    public imageUrl: string;
    public imageAlt: string;
    public routerLink: string;
    public projects: Project[];
    constructor(
        title: string, 
        description: string, 
        imageUrl: string, 
        imageAlt: string, 
        routerLink: string,
        projects: Project[]){
            this.title = title;
            this.description = description;
            this.imageUrl = imageUrl;
            this.imageAlt = imageAlt;
            this.routerLink = routerLink;
            this.projects = projects;
        }
}