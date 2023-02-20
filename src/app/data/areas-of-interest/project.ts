export class Project {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    routerLink: string;
    constructor(
        title: string,
        description: string,
        imageUrl: string,
        imageAlt: string,
        routerLink: string) {
            this.title = title;
            this.description = description;
            this.imageUrl = imageUrl;
            this.imageAlt = imageAlt;
            this.routerLink = routerLink;
    }
}