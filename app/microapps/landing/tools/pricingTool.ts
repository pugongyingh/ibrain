import { createTool } from './createTool';

interface PricingArguments {
  plan?: string; // Name of the pricing plan
}
export const pricingTool = createTool(
  'explainPricing',
  'Provides information about the pricing plans offered by iBrain Data in the current speaking language.',
  [],
  {
    plan: {
      type: 'string',
      description: 'Name of the pricing plan (optional).'
    }
  }, 
  async (args?: PricingArguments) => {
    let instructionForAI: string;
    const plan = args?.plan?.toLowerCase() ?? 'all';
    switch (plan) {
        case 'basic':
            instructionForAI = `Inform the user about the Basic Subscription, highlighting the 14-day free trial with no credit card required. Emphasize its suitability for individuals and small businesses, mentioning features like full access to voice-based data interaction, up to 3 database integrations, advanced query generation, visualization capabilities, and multi-language support. Conclude by mentioning the post-trial cost of $19.99 per month or $199.90 per year, and prompt the user to create an account using Google, email, or GitHub. Ask if they wish to get started.`;
            break;
        case 'business':
            instructionForAI = `Describe the Business Subscription to the user, starting with the 14-day free trial that requires no credit card. Detail the benefits for teams and enterprises, such as unlimited database connectivity, customizable dashboards, priority support, multi-tenant functionality, and user management. Note the price of $99.99 per month or $1099.89 per year after the trial, and $15.99 per additional user per month. Encourage quick sign-up using Google, email, or GitHub, and inquire if they're ready to begin.`;
            break;
        default:
            instructionForAI = `Explain to the user that both Basic and Business subscriptions start with a 14-day free trial without needing a credit card. Stress that this trial allows exploring the platform's full capabilities to find the plan that best fits their needs. Mention the ease of signing up with just an email or via Google or GitHub accounts. Encourage the user to start their journey with iBrain Data and ask if they're ready to discover what the platform can offer.`;
    }

    // Return the instructions for the AI to communicate to the user
    return instructionForAI;
}

);
