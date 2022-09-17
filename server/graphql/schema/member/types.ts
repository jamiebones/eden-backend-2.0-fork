import { gql } from "apollo-server-core";
export default gql`
  """
  This is the Member of Eden 🌳
  """ # ---------- Member --------------
  type Member {
    _id: ID

    """
    The Discord Name of the member
    """
    name: String
    """
    The picture of the user on Discord
    """
    avatar: String

    onbording: Onboarding

    content: Content

    skills: [SkillAndLevel]

    projects: [ProjectOfMember]

    servers: [Server]

    registeredAt: String
  }

  """
  Automatically gets update by ProjectTeamMember
  """
  type ProjectOfMember {
    info: Project
    role: ProjectRole
    phase: PhaseProjectRoleEnum
  }

  """
  All the information about onboarding
  """
  type Onboarding {
    """
    💡 If someone finish the basic signup, this variable will be true
    """
    signup: Boolean
    """
    📝 Here you can see the progress of the signup for this user
    """
    percentage: Int
  }

  """
  This is the Content of the Member 🧑‍💼
  """
  type Content {
    discord: DiscordContent
    general: GeneralContent
  }

  """
  All the info that we collect and use on Discord
  """
  type DiscordContent {
    """
    On Discord every user has a discriminator that looks like H%1234 for example BluePandaH%231234
    """
    discriminator: String
  }

  """
  All the info that we collect and use on Member
  """
  type GeneralContent {
    content: Content
    hoursPerWeek: Float
    timeZone: String
    """
    The Links that are saved during signup for the user
    """
    links: [Link]
  }

  """
  All the content that the user has created during signup ✍️
  """
  type Content {
    bio: String
    interest: String
    mostProud: String
    showCaseAbility: String
  }

  # ---------- Member --------------

  type FindMembersCursorOutput {
    edges: [MemberEdge]
    pageInfo: PageInfo
  }

  type MemberEdge {
    cursor: String
    node: Member
  }
  #  ------- findMembers ------

  #  ------- searchMembersAutocomplete ------

  # ---------- QUERY - Functions --------------

  # ---------- MUTATION - Functions --------------

  # ------- Member Skills - Functions ------

  # ---------- MUTATION - Functions --------------
`;