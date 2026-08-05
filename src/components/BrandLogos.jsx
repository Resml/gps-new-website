import React from 'react';

/* ─────────────────────────────────────────────────────────
   Shared OEM brand SVG logos — used in BrandMarquee & Services
───────────────────────────────────────────────────────── */
export const brandLogos = {
  'GMN': {
    svg: <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="28" fill="#1a4fa0" letterSpacing="1">GMN</text></svg>,
  },
  'SETCO': {
    svg: <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="1">SETCO</text><rect x="112" y="8" width="4" height="24" fill="#cc0000" rx="1"/><rect x="118" y="14" width="4" height="12" fill="#cc0000" rx="1"/></svg>,
  },
  'HAAS': {
    svg: <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="36" height="32" rx="3" fill="#CC0000"/><text x="4" y="27" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#ffffff">H</text><text x="40" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="1">AAS</text></svg>,
  },
  'DMG MORI': {
    svg: <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="22" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#1a1a1a" letterSpacing="0.5">DMG MORI</text><text x="2" y="34" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8.5" fill="#666666" letterSpacing="1.2">AKTIENGESELLSCHAFT</text></svg>,
  },
  'MAZAK': {
    svg: <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="32" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="32" fill="#e8470a" fontStyle="italic" letterSpacing="-0.5">Mazak</text></svg>,
  },
  'FISCHER': {
    svg: <svg viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#004a9f" letterSpacing="1">FISCHER</text><polygon points="130,12 145,20 130,28" fill="#004a9f"/></svg>,
  },
  'OKUMA': {
    svg: <svg viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="8" width="5" height="24" fill="#0d2155" rx="1"/><rect x="2" y="27" width="14" height="5" fill="#0d2155" rx="1"/><text x="22" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#0d2155" letterSpacing="1">OKUMA</text></svg>,
  },
  'KESSLER': {
    svg: <svg viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="6" width="28" height="28" rx="2" fill="#1a1a1a"/><text x="5" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="#ffffff">K</text><text x="34" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="22" fill="#1a1a1a" letterSpacing="1">ESSLER</text></svg>,
  },
  'HERMLE': {
    svg: <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#003087" letterSpacing="1">HERMLE</text></svg>,
  },
  'FANUC': {
    svg: <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#f7cc00" letterSpacing="1" stroke="#1a1a1a" strokeWidth="0.5">FANUC</text></svg>,
  },
  'MAKINO': {
    svg: <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#c00" letterSpacing="1">MAKINO</text></svg>,
  },
  'STEP-TEC': {
    svg: <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="21" fill="#1a1a1a" letterSpacing="2">STEP-TEC</text></svg>,
  },
  'HSD': {
    svg: <svg viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#e63312" letterSpacing="2">HSD</text></svg>,
  },
  'CHIRON': {
    svg: <svg viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#1a1a1a" letterSpacing="1">CHIRON</text></svg>,
  },
  'IBAG': {
    svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#0050a0" letterSpacing="2">IBAG</text></svg>,
  },
  'WEISS': {
    svg: <svg viewBox="0 0 105 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="1">WEISS</text></svg>,
  },
  'BLOHM': {
    svg: <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#cc0000" letterSpacing="1">BLOHM</text></svg>,
  },
  'SMS': {
    svg: <svg viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#004a9f" letterSpacing="2">SMS</text></svg>,
  },
  'MATSUURA': {
    svg: <svg viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="21" fill="#003087" letterSpacing="1">MATSUURA</text></svg>,
  },
  'TOYODA': {
    svg: <svg viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="23" fill="#cc0000" letterSpacing="1">TOYODA</text></svg>,
  },
  'HSD ITALY': {
    svg: <svg viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="26" fill="#e63312" letterSpacing="2">HSD</text></svg>,
  },
  'COLOMBO': {
    svg: <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="22" fill="#1a1a1a" letterSpacing="1">COLOMBO</text></svg>,
  },
  'OMLAT': {
    svg: <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="2" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="24" fill="#003087" letterSpacing="1">OMLAT</text></svg>,
  },
};
