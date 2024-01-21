import { Citizen, Knowledge, Role } from "./types";

export default function isAllowed(
  knowledge: Knowledge,
  citizenName: string,
  placeName: string
): boolean {
  const citizen = knowledge.citizens.find(
    (citizen: Citizen) => citizen.name === citizenName
  );

  if (!citizen) {
    return false;
  }

  const { roles, allowed_places } = citizen;
  if (allowed_places && allowed_places.includes(placeName)) {
    return true;
  }

  let rolesChecked: string[] = [];
  const result = isAllowedRoleLocation(roles, placeName, knowledge, rolesChecked);

  if (result) {
    return true;
  }

  // The citizen doesn't have access to the specified location
  return false;
}

function isAllowedRoleLocation(
  roles: string[],
  placeName: string,
  knowledge: Knowledge,
  rolesChecked: string[],
) {
  for (let i = 0; i < roles.length; i++) {
    const role = knowledge.roles.find((role: Role) => role.title === roles[i]);
    if(role?.title && rolesChecked.includes(role?.title)){
      break;
    }
    rolesChecked.push(role?.title || "");
    if (role?.allowed_places.includes(placeName)) {
      return true;
    }
    const additionalRoles = role?.roles;
    if (additionalRoles) {
      const isAllowed = isAllowedRoleLocation(
        additionalRoles,
        placeName,
        knowledge,
        rolesChecked,
      );
      if (isAllowed) {
        return true;
      }
    }
  }
  return false;
}

function isAllowedRole() {}
