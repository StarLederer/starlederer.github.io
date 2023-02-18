import { defineConfig, presets } from 'sponsorkit';

export default defineConfig({
  outputDir: "../www/sponsors",

  tiers: [
    {
      title: '💔',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '❤️',
      preset: presets.small,
    },
    {
      title: '❤️❤️',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: '❤️❤️❤️',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: '💖',
      monthlyDollars: 125,
      preset: presets.large,
    },
    {
      title: '💖💖💖',
      monthlyDollars: 625,
      preset: presets.xl,
    },
  ],
});
