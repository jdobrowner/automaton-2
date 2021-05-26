import {
  ColorThemeNames,
  InitialStateOptions,
  RandomnessStates,
  Rulesets,
  Speeds,
} from 'src/constants';
import Colors from '../colors';
import { writable } from 'svelte/store';

export const colors = writable(Colors[ColorThemeNames.SOUTHWEST]);

export const initialState = writable(InitialStateOptions.LITTLE_TRIANGLE);

export const randomness = writable(RandomnessStates.OFF);

export const ruleset = writable(Rulesets.EXPANDER);

export const speed = writable(Speeds.MEDIUM);

export const cellStates = writable(4);
