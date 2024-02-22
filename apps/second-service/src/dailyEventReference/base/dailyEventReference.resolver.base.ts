/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DailyEventReference } from "./DailyEventReference";
import { DailyEventReferenceCountArgs } from "./DailyEventReferenceCountArgs";
import { DailyEventReferenceFindManyArgs } from "./DailyEventReferenceFindManyArgs";
import { DailyEventReferenceFindUniqueArgs } from "./DailyEventReferenceFindUniqueArgs";
import { CreateDailyEventReferenceArgs } from "./CreateDailyEventReferenceArgs";
import { UpdateDailyEventReferenceArgs } from "./UpdateDailyEventReferenceArgs";
import { DeleteDailyEventReferenceArgs } from "./DeleteDailyEventReferenceArgs";
import { Booking } from "../../booking/base/Booking";
import { DailyEventReferenceService } from "../dailyEventReference.service";
@graphql.Resolver(() => DailyEventReference)
export class DailyEventReferenceResolverBase {
  constructor(protected readonly service: DailyEventReferenceService) {}

  async _dailyEventReferencesMeta(
    @graphql.Args() args: DailyEventReferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DailyEventReference])
  async dailyEventReferences(
    @graphql.Args() args: DailyEventReferenceFindManyArgs
  ): Promise<DailyEventReference[]> {
    return this.service.dailyEventReferences(args);
  }

  @graphql.Query(() => DailyEventReference, { nullable: true })
  async dailyEventReference(
    @graphql.Args() args: DailyEventReferenceFindUniqueArgs
  ): Promise<DailyEventReference | null> {
    const result = await this.service.dailyEventReference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DailyEventReference)
  async createDailyEventReference(
    @graphql.Args() args: CreateDailyEventReferenceArgs
  ): Promise<DailyEventReference> {
    return await this.service.createDailyEventReference({
      ...args,
      data: {
        ...args.data,

        booking: args.data.booking
          ? {
              connect: args.data.booking,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DailyEventReference)
  async updateDailyEventReference(
    @graphql.Args() args: UpdateDailyEventReferenceArgs
  ): Promise<DailyEventReference | null> {
    try {
      return await this.service.updateDailyEventReference({
        ...args,
        data: {
          ...args.data,

          booking: args.data.booking
            ? {
                connect: args.data.booking,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DailyEventReference)
  async deleteDailyEventReference(
    @graphql.Args() args: DeleteDailyEventReferenceArgs
  ): Promise<DailyEventReference | null> {
    try {
      return await this.service.deleteDailyEventReference(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Booking, {
    nullable: true,
    name: "booking",
  })
  async getBooking(
    @graphql.Parent() parent: DailyEventReference
  ): Promise<Booking | null> {
    const result = await this.service.getBooking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
