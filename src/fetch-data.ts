import { useQuery } from "@tanstack/react-query";
import { getCitizens, getPlaces, getRoles } from "./api";
import { Knowledge } from "./types";

export function fetchKnowledge() : Knowledge {
    const results: Knowledge = {citizens: [], roles: [], places: []};
    // results['roles'] =getRoles().then((res)=> res.roles);
    // results['places'] = getPlaces().then((res)=> res.places);
    // results['citizens'] = getCitizens().then((res)=> res.citizens);
    // const res = Promise.all([getRoles, getPlaces, getCitizens]).then((values)=>{results['role']=values[0].roles});

    // return {roles: res.} as Knowledge;
}

// export function fetchKnowledge() {
//   const {
//     data: citizens,
//     isLoading: isLoadingCitizens,
//     error: errorCitizens,
//   } = useQuery({
//     queryFn: () =>
//       fetch("/api/citizens").then((res) =>
//         res.json()
//       ),
//     queryKey: ["citizens"],
//   });

//   const {
//     data: places,
//     isLoading: isLoadingPlaces,
//     error: errorPlaces,
//   } = useQuery({
//     queryFn: () =>
//       fetch("/api/places").then((res) =>
//         res.json()
//       ),
//     queryKey: ["places"],
//   });

//   const {
//     data: roles,
//     isLoading: isLoadingRoles,
//     error: errorRoles,
//   } = useQuery({
//     queryFn: () =>
//       fetch("/api/roles").then((res) =>
//         res.json()
//       ),
//     queryKey: ["roles"],
//   });

//   return {
//     data: { roles, places, citizens },
//     isLoading: isLoadingCitizens || isLoadingPlaces || isLoadingRoles,
//     error: errorCitizens || errorPlaces || errorRoles,
//   };
// }
