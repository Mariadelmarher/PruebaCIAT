export default class GeneralUtils {
  generateKeyCounter: number;
  constructor() {
    this.generateKeyCounter = 0;
  }
  generateKey(pre: string): string {
    const key = `${pre}_${new Date().getTime()}_${this.generateKeyCounter}`;
    this.generateKeyCounter++;
    return key;
  }
  validateEmail(email: string): boolean {
    if (email.length > 5 && email.includes("@") && !email.includes(" ")) {
      return true;
    }
    return false;
  }
  validateIp(ipaddress: string): boolean {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    return false;
  }
  analyzeAnswerYesNo(text: string): "YES" | "NO" | null {
    const regexYes = [
      /\byes+\b/i,
      /\bsi+\b/i,
      /\baceptar+\b/i,
      /\bclaro+\b/i,
      /\bconcedido+\b/i,

      /\bafirmativo+\b/i,
      /\baceptado+\b/i,
    ];
    const regexNo = [
      /\bno+\b/i,
      /\bnot+\b/i,
      /\bdenegar+\b/i,
      /\brechazar+\b/i,
      /\bclaro que no+\b/i,
      /\bnegativo+\b/i,
      /\bdenegado+\b/i,
    ];

    const analyze = (regex: RegExp) => {
      const arr = text.match(regex);
      const result = [];
      arr?.forEach((item: any) => {
        result.push(item);
      });
      return result.length > 0;
    };
    for (const key in regexYes) {
      const regex = regexYes[key];
      if (analyze(regex)) return "YES";
    }
    for (const key in regexNo) {
      const regex = regexYes[key];
      if (analyze(regex)) return "NO";
    }
    return null;
  }
  stringWithLimit(str: string, limit: number = 0) {
    console.log("stringWithLimit");
    if (str.length <= limit) return str;
    return str.slice(0, limit);
  }

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::                                                                         :::
  //:::  This routine calculates the distance between two points (given the     :::
  //:::  latitude/longitude of those points). It is being used to calculate     :::
  //:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
  //:::                                                                         :::
  //:::  Definitions:                                                           :::
  //:::    South latitudes are negative, east longitudes are positive           :::
  //:::                                                                         :::
  //:::  Passed to function:                                                    :::
  //:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
  //:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
  //:::    unit = the unit you desire for results                               :::
  //:::           where: 'M' is statute miles (default)                         :::
  //:::                  'K' is kilometers                                      :::
  //:::                  'N' is nautical miles                                  :::
  //:::                                                                         :::
  //:::  Worldwide cities and other features databases with latitude longitude  :::
  //:::  are available at https://www.geodatasource.com                         :::
  //:::                                                                         :::
  //:::  For enquiries, please contact sales@geodatasource.com                  :::
  //:::                                                                         :::
  //:::  Official Web site: https://www.geodatasource.com                       :::
  //:::                                                                         :::
  //:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
  //:::                                                                         :::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // modify to return distance in meters
  distance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string = "") {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;

      dist = dist * 1.609344 // to km
      dist = parseFloat(parseFloat((dist * 1000) as any).toFixed(2) as any);

      return dist;
    }
  }
}
