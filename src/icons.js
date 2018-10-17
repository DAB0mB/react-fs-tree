import React from 'react'

export const Folder = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder" class="svg-inline--fa fa-folder fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="font-size: 15px; line-height: 15px; height: 15px;"><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>
)

export const FolderOpen = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="folder-open" class="svg-inline--fa fa-folder-open fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="font-size: 15px; line-height: 15px; height: 15px;"><path fill="currentColor" d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"></path></svg>
)

export const File = props  => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="file" class="svg-inline--fa fa-file fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="font-size: 15px; line-height: 15px; height: 15px;"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
)

export const CaretRight = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6 _caret" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" style="font-size: 15px; line-height: 15px; height: 15px;"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
)

export const CaretDown = props => (
  <svg {...props} aria-hidden="true" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 _caret" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="font-size: 15px; line-height: 15px; height: 15px;"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
)

export default {
  Folder,
  FolderOpen,
  File,
  CaretRight,
  CaretDown,
}
