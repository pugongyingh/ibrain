'use client';
import { useDevTools } from '@/app/hooks/useDevTool';
import { core, useBrainStack } from '@/app/providers/brainstack';
import { useSpeech2text } from '@/app/hooks/useSpeech2text';
import { useTextToSpeech } from '@/app/hooks/useText2Speech';
import { useCommunicationManager } from '@/app/hooks/useCommunicationManager';

export default function Init() {
  const bstack = useBrainStack();
  useDevTools(core);
  const { VoicePermissionRequest } = useSpeech2text();
  useTextToSpeech();
  // const { getHistory } = useCommunicationManager({});

  return (
    <>
      <VoicePermissionRequest />
      <button
        onClick={() => {
          bstack.store.emit('ibrain.speak', { text: 'hello there' });
        }}
      >
        Speak
      </button>
      {/* <button
        onClick={() => {
          console.log(getHistory());
        }}
      >
        History
      </button> */}
    </>
  );
}
