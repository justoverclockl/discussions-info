import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import DiscussionListItem from 'flarum/common/components/DiscussionListItem';

app.initializers.add('justoverclock/discussion-info', () => {
  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    const discussion = this.attrs.discussion;
    const tag1 = discussion.data.attributes.tag1
    const tag2 = discussion.data.attributes.tag2
    const tag3 = discussion.data.attributes.tag3

    const hasTagsFilled = {
      view: function (vnode) {
        if (tag1 !== undefined && tag2 !== undefined && tag3 !== undefined) {
          if (tag1 !== '' && tag2 !== '' && tag3 !== '') {
            return (
              m('div', {className: 'tags-filled'}, [
                m('i', {className: 'fas fa-tags icontext'}),
                m('strong', app.translator.trans('justoverclock-discussion-info.forum.tag') + ': '),
                discussion.data.attributes.tag1 + ', ' + discussion.data.attributes.tag2 + ', ' + discussion.data.attributes.tag3
              ]))
          }
        }
      },
    };

    items.add(
      'replyCount',
      m('div', {className: 'replyCountBox'}, [
        m('i', {className: 'fas fa-users icontext'}),
        m('strong', app.translator.trans('justoverclock-discussion-info.forum.participantCount') + ': '),
        discussion.data.attributes.participantCount,
        m('i', {className: 'fas fa-clock icontext'}),
        m('strong', app.translator.trans('justoverclock-discussion-info.forum.createdAt') + ': '),
        discussion.data.attributes.createdAt.slice(0, 10),
        m(hasTagsFilled)
      ])
    );
  });
});
