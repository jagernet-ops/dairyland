import interestsJSON from "./interests.json" with { type: "json"}

class Interests {
  private readonly interestsFilePath: string = "./static/images/interests.svg";
  private skilliconsURL: URL = new URL("https://skillicons.dev/icons");
  constructor(){
   this.skilliconsURL.searchParams.append("i", interestsJSON.interests.join(","));
   this.skilliconsURL.searchParams.append("perline", interestsJSON.iconsPerLine);
  }

  public async handleInterestFetch(): Promise<void> {
    const iconsRemote = await fetch(this.skilliconsURL);
    const iconsRemoteReader = iconsRemote.body
    if(iconsRemoteReader){
      await Deno.writeFile(this.interestsFilePath, iconsRemoteReader);
    }
  }

}


const siteInterests: Interests = new Interests();
siteInterests.handleInterestFetch();
