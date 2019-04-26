import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { villainService } from '../shared';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  await villainService.putVillain(context);
};

export default httpTrigger;
