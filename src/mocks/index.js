import { mockCommunities } from './communities.js';
import { mockCommunityMembers } from './communityMembers.js';
import { mockItems } from './items.js';
import { mockUsers } from './users.js';

// Variável para controlar IDs únicos de membros
let nextMemberId = 10;

// Função para obter comunidades com contagem de membros
export const getCommunitiesWithMemberCount = () => {
  return mockCommunities.map((community) => {
    const membersCount = mockCommunityMembers.filter(
      (member) => member.communityId === community.id
    ).length;

    return {
      ...community,
      membersCount,
    };
  });
};

// Função para obter membros de uma comunidade específica
export const getCommunityMembers = (communityId) => {
  return mockCommunityMembers
    .filter((member) => member.communityId === communityId)
    .map((member) => {
      const userData = mockUsers.find((user) => user.id === member.userId);
      return {
        ...member,
        user: userData,
      };
    });
};

// Função para obter comunidades de um usuário específico
export const getUserCommunities = (userId) => {
  const userMemberships = mockCommunityMembers.filter(
    (member) => member.userId === userId
  );

  return userMemberships.map((membership) => {
    const communityData = mockCommunities.find(
      (comm) => comm.id === membership.communityId
    );
    return {
      ...communityData,
      membership: {
        isAdmin: membership.isAdmin,
        membershipId: membership.id,
      },
    };
  });
};

// Função para verificar se um usuário é admin de uma comunidade
export const isUserCommunityAdmin = (userId, communityId) => {
  const membership = mockCommunityMembers.find(
    (member) => member.userId === userId && member.communityId === communityId
  );
  return Boolean(membership?.isAdmin);
};

// Função para obter itens de uma comunidade
export const getCommunityItems = (communityId) => {
  return mockItems.filter((item) => item.communityId === communityId);
};

// Função para obter dados da home (comunidades + itens)
export const getHomeData = () => {
  const communities = getCommunitiesWithMemberCount();
  return {
    communities,
    items: mockItems,
  };
};

// Função para criar um novo membro da comunidade
export const createMember = (userId, communityId, isAdmin = false) => {
  // Verificar se o usuário já é membro da comunidade
  const existingMember = mockCommunityMembers.find(
    (member) => member.userId === userId && member.communityId === communityId
  );

  if (existingMember) {
    throw new Error('Usuário já é membro desta comunidade');
  }

  // Verificar se o usuário existe
  const userExists = mockUsers.find((user) => user.id === userId);
  if (!userExists) {
    throw new Error('Usuário não encontrado');
  }

  // Verificar se a comunidade existe
  const communityExists = mockCommunities.find(
    (community) => community.id === communityId
  );
  if (!communityExists) {
    throw new Error('Comunidade não encontrada');
  }

  // Criar novo membro
  const newMember = {
    id: `member-${nextMemberId}`,
    userId,
    communityId,
    isAdmin,
  };

  // Incrementar ID para próximo membro
  nextMemberId += 1;

  // Adicionar ao array de membros
  mockCommunityMembers.push(newMember);

  return newMember;
};

// Função para obter um membro específico pelo ID
export const getMemberById = (memberId) => {
  const foundMember = mockCommunityMembers.find(
    (memberItem) => memberItem.id === memberId
  );

  if (!foundMember) {
    return null;
  }

  // Buscar dados do usuário associado
  const userData = mockUsers.find((user) => user.id === foundMember.userId);

  // Buscar dados da comunidade associada
  const communityData = mockCommunities.find(
    (community) => community.id === foundMember.communityId
  );

  return {
    ...foundMember,
    user: userData,
    community: communityData,
  };
};

// Função para obter um membro específico por userId e communityId
export const getMemberByUserAndCommunity = (userId, communityId) => {
  const foundMember = mockCommunityMembers.find(
    (memberItem) =>
      memberItem.userId === userId && memberItem.communityId === communityId
  );

  if (!foundMember) {
    return null;
  }

  return getMemberById(foundMember.id);
};

// Função para remover um membro da comunidade
export const removeMember = (memberId) => {
  const memberIndex = mockCommunityMembers.findIndex(
    (memberItem) => memberItem.id === memberId
  );

  if (memberIndex === -1) {
    throw new Error('Membro não encontrado');
  }

  const removedMember = mockCommunityMembers.splice(memberIndex, 1)[0];
  return removedMember;
};

// Função para atualizar status de admin de um membro
export const updateMemberAdminStatus = (memberId, isAdmin) => {
  const foundMember = mockCommunityMembers.find(
    (memberItem) => memberItem.id === memberId
  );

  if (!foundMember) {
    throw new Error('Membro não encontrado');
  }

  foundMember.isAdmin = isAdmin;
  return foundMember;
};

export { mockCommunities } from './communities.js';
export { mockCommunityMembers } from './communityMembers.js';
export { mockItems } from './items.js';
// Exportar todos os mocks
export { mockUsers } from './users.js';
