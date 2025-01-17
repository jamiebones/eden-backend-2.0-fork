import { Members } from "../../../../models/memberModel";
import { AddSkillsToMemberInput, Member } from "../../../../generated";
const { ApolloError } = require("apollo-server-express");

const addSkillsToMember = async (
  parent: { parent: any },
  args: { args: any; request: AddSkillsToMemberInput },
  context: { context: any },
  info: { info: any },
) => {
  try {
    const { memberID, skills } = args.request;
    console.log("Mutation > addSkillsToMember > args.fields = ", args.request);

    if (!memberID) throw new Error("memberID (from Discord) is required to update member");
    if (memberID.length !== 18) throw new Error("memberID invalid");

    const member = await Members.findOne({ _id: memberID });

    if (!member) {
      throw new Error("Member not found");
    }

    let memberSkillsID = member?.skills.map((skill: any) => skill.skillID);

    for (let i = 0; i < skills.length; i++) {
      if (!memberSkillsID.includes(skills[i]?.skillID)) {
        member?.skills.push(skills[i]);
        console.log("new Staff = ", skills[i]);
      }
    }

    if (member) {
      await member.save();
      return member;
    } else {
      throw new Error("Member not found");
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberMutation > addSkillsToMember",
    });
  }
};

export default addSkillsToMember;
